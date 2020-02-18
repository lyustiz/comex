import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { EjecutivoService } from '@service/ejecutivo.service';
import { Ejecutivo } from '@model/ejecutivo.model';
import { TableService } from '@app/core/service/list/table.service';
import { EjecutivosFormComponent } from '../ejecutivos-form/ejecutivos-form.component';
import { DialogComponent } from '@shared/components/dialog/dialog.component';

@Component({
  selector: 'app-ejecutivos-list',
  templateUrl: './ejecutivos-list.component.html',
  styleUrls: ['./ejecutivos-list.component.scss']
})
export class EjecutivosListComponent implements OnInit, AfterViewInit {

  public clientes: Ejecutivo[];
  public cliente: Ejecutivo;
  private dialogRef: MatDialogRef<any>;

  @ViewChild( MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild( MatSort, {static: false}) sort: MatSort;

  public columns: string[] = [
                              'EJE_NOM',
                              'EJE_RUT',
                              'EJE_COD',
                              'EJE_TIP',
                              'EJE_SUC',
                              'EJE_TEL',
                              'EJE_FAX',
                              'EJE_EML',
                              'ACTIONS'
                            ];

  constructor(
    public ejecutivoService: EjecutivoService,
    public dialog: MatDialog,
    public table: TableService
  ) {
    this.table.getData(this.ejecutivoService.getEjecutivos());
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.table.dataSource.paginator = this.paginator;
    this.table.dataSource.sort = this.sort;
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
