import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { TableService } from '@app/core/service/list/table.service';

import { EjecutivoService } from '@service/ejecutivo.service';
import { EjecutivosFormComponent } from '../ejecutivos-form/ejecutivos-form.component';

@Component({
  selector: 'app-ejecutivos-list',
  templateUrl: './ejecutivos-list.component.html',
  styleUrls: ['./ejecutivos-list.component.scss']
})
export class EjecutivosListComponent implements OnInit, AfterViewInit {

  private dialogRef: MatDialogRef<any>;

  @ViewChild( MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild( MatSort, {static: false}) sort: MatSort;

  constructor(
    public ejecutivoService: EjecutivoService,
    public dialog: MatDialog,
    public table: TableService
  ) {  }

  ngOnInit() {
    this.table.getData(this.ejecutivoService.getEjecutivos());
    this.table.setDefineCols(this.defineCols());
    this.table.setColums();
  }

  ngAfterViewInit() {
    this.table.dataSource.paginator = this.paginator;
    this.table.dataSource.sort = this.sort;
  }

  defineCols() {
    return [
      { colum: 'EJE_NOM', visible: true, label: 'Rut Ejecutivo' },
      { colum: 'EJE_RUT', visible: true, label: 'Codigo'},
      { colum: 'EJE_COD', visible: true, label: 'Tipo'},
      { colum: 'EJE_TIP', visible: true, label: 'Nombre'},
      { colum: 'EJE_SUC', visible: true, label: 'Sucursal'},
      { colum: 'EJE_TEL', visible: true, label: 'Fax'},
      { colum: 'EJE_FAX', visible: true, label: 'Fono'},
      { colum: 'EJE_EML', visible: true, label: 'Email'},
      { colum: 'ACTIONS', visible: true, label: 'Acciones'},
    ];
  }

  create() {
    this.showForm( '', 'create', 'Agregar Cliente', EjecutivosFormComponent );
  }

  edit( item ) {
    this.showForm( item, 'update', 'Editar Cliente', EjecutivosFormComponent );
  }

  delete( item ) {

    const description = `Desea eliminar el Cliente ${item.EJE_NOM} ?`;

    this.showDialog('Atencion', description, 'confirm', DialogComponent);

    this.dialogRef.afterClosed().subscribe( result => {
      if ( result.confirm ) {
        this.ejecutivoService.deleteEjecutivo( item.key );
      }
    });
  }

  showForm( item , action: string, title: string,  component) {

    this.dialogRef = this.dialog.open( component, {
      data: { item, title, action },
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
