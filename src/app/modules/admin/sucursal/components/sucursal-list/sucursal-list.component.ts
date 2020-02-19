import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Sucursal } from '@app/data/model/sucursal_old.model';
import { SucursalService } from '@app/data/service/sucursal_old.service';
import { SucursalCreateComponent } from '../sucursal-create/sucursal-create.component';

@Component({
  selector: 'app-sucursal-list',
  templateUrl: './sucursal-list.component.html',
  styleUrls: ['./sucursal-list.component.scss']
})
export class SucursalListComponent implements OnInit, AfterViewInit {

  sucursales: Sucursal[];
  sucursal: Sucursal;
  filterField: string = null;
  columns: string[] = ['co_sucursal',
                      'nu_sucursal',
                      'tx_glosa_sucursal',
                      'tx_direccion',
                      'nu_direccion',
                      'tx_comuna',
                      'tx_telefono',
                      'tx_fax',
                      'nu_banco',
                      'tx_email_agente',
                      'id'];

  dataSource = new MatTableDataSource <Sucursal> (this.sucursales);

  @ViewChild( MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild( MatSort, {static: false}) sort: MatSort;

  constructor(
    private sucursalService: SucursalService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getSucursales();
  }

  ngAfterViewInit() {
    this.dataSource.sort      = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getSucursales() {
    return this.sucursalService.getSucursales()
    .subscribe(
      sucursales => {
        this.dataSource.data = sucursales;
        console.log(sucursales);
      },
      error => {
        console.error(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearFilter() {
    this.dataSource.filter = '';
    this.filterField = '';
  }

  create() {

    const dialogRef = this.dialog.open( SucursalCreateComponent, {
      data: { item: '', title: 'Cargar Sucursal'},
      disableClose: true,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe( result => console.log(result));
  }

  edit(item: Sucursal) {

    const dialogRef = this.dialog.open( SucursalCreateComponent, {
      data: { item , title: 'Editar Sucursal'},
      disableClose: true,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe( result => console.log(result));
  }

  delete(item: Sucursal) {
    console.log('del');
  }

}
