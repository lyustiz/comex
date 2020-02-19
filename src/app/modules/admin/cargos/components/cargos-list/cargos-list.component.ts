import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { TableService } from '@app/core/service/list/table.service';

import { CargoService } from '@service/cargo.service';
import { CargosFormComponent } from '../cargos-form/cargos-form.component';

@Component({
  selector: 'app-cargos-list',
  templateUrl: './cargos-list.component.html',
  styleUrls: ['./cargos-list.component.scss']
})
export class CargosListComponent implements OnInit, AfterViewInit {

  private dialogRef: MatDialogRef<any>;

  @ViewChild( MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild( MatSort, {static: false}) sort: MatSort;

  public columns: string[] = [
                              'COD_CGO_PSN',
                              'GLS_CGO_PSN',
                              'NUM_CRV_ORD_CGO',
                              'ACTIONS'
                              ];

  constructor(
    public cargoService: CargoService,
    public dialog: MatDialog,
    public table: TableService
  ) {
    this.table.getData(this.cargoService.getCargos());
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.table.dataSource.paginator = this.paginator;
    this.table.dataSource.sort = this.sort;
  }

  create() {
    this.showForm( '', 'create', 'Agregar Cargo', CargosFormComponent );
  }

  edit( item ) {
    this.showForm( item, 'update', 'Editar Cargo', CargosFormComponent );
  }

  delete( item ) {

    const description = `Desea eliminar el Cargo ${item.GLS_CGO_PSN} ?`;

    this.showDialog('Atencion', description, 'confirm', DialogComponent);

    this.dialogRef.afterClosed().subscribe( result => {
      if ( result.confirm ) {
        this.cargoService.deleteCargo( item.key );
      }
    });
  }

  showForm( item , action: string, title: string,  component) {

    const rows = this.table.dataSource.data.length;

    this.dialogRef = this.dialog.open( component, {
      data: { item, title, action, rows },
      disableClose: true,
      autoFocus: true,
    });

    this.dialogRef.afterClosed().subscribe( result => console.log(result));
  }

  showDialog( title: string, description: string, type: string, component) {

    this.dialogRef = this.dialog.open( component, {
      data: { title, description, type },
      disableClose: true,
      autoFocus: true,
    });
  }

}
