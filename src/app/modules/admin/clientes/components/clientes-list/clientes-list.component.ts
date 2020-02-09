import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { ClientesService } from '@service/clientes.service';
import { Cliente } from '@model/cliente.model';
import { ClientesFormComponent } from '../clientes-form/clientes-form.component';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit, AfterViewInit {

  public clientes: Cliente[];
  public cliente: Cliente;
  public filterField: string = null;
  public dataSource = new MatTableDataSource <Cliente> (this.clientes);
  public columns: string[] = ['BCO_SWF',
                              'BCO_NOM',
                              'BCO_NRO_RUT',
                              'BCO_RUT_DV',
                              'BCO_DIR',
                              'BCO_CIU',
                              'BCO_PAI',
                              'BCO_COR'
                            ];

  @ViewChild( MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild( MatSort, {static: false}) sort: MatSort;

  constructor(
    public clientesService: ClientesService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getClientes();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort      = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getClientes() {
    return this.clientesService.getClientes()
    .subscribe(
      data => {
        this.clientes = data;
        console.log(data);
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

    const dialogRef = this.dialog.open( ClientesFormComponent, {
      data: { item: '', title: 'Cargar Cliente'},
      disableClose: true,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe( result => console.log(result));
  }

  edit(item: Cliente) {

    const dialogRef = this.dialog.open( ClientesFormComponent, {
      data: { item , title: 'Editar Cliente'},
      disableClose: true,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe( result => console.log(result));
  }

  delete(item: Cliente) {
    console.log('del');
  }

}
