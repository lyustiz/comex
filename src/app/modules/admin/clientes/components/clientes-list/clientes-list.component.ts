import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ClientesService } from '@service/clientes.service';
import { Cliente } from '@model/cliente.model';
import { TableService } from '@app/core/service/list/table.service';
import { ClientesFormComponent } from '../clientes-form/clientes-form.component';
import { DialogComponent } from '@shared/components/dialog/dialog.component';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit, AfterViewInit {

  public clientes: Cliente[];
  public cliente: Cliente;
  private dialogRef: MatDialogRef<any>;

  @ViewChild( MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild( MatSort, {static: false}) sort: MatSort;

  public columns: string[] = ['CLI_RUT',
                              'CLI_NOM',
                              'CLI_DIR',
                              'CLI_CIU',
                              'CLI_COM',
                              'CLI_FON',
                              'CLI_EML',
                              'CLI_CAS'
                            ];

  constructor(
    public clientesService: ClientesService,
    public dialog: MatDialog,
    public table: TableService
  ) { }

  ngOnInit() {
    this.table.getData(this.clientesService.getClientes());
  }

  ngAfterViewInit() {
    this.table.dataSource.paginator = this.paginator;
    this.table.dataSource.sort = this.sort;
  }

  create() {
    this.showForm( '', 'create', 'Agregar Cliente', ClientesFormComponent );
  }

  edit( item ) {
    this.showForm( item, 'update', 'Editar Cliente', ClientesFormComponent );
  }

  delete( item ) {

    const description = `Desea eliminar el Cliente ${item.CLI_NOM} ?`;

    this.table.showDialog('Atencion', description, 'confirm', DialogComponent);

    this.table.dialogRef.afterClosed().subscribe( result => {
      if ( result.confirm ) {
        this.clientesService.deleteCliente( item.key );
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

}
