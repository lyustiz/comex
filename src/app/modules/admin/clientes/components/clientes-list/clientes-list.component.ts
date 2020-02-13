import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ClientesService } from '@service/clientes.service';
import { Cliente } from '@model/cliente.model';
import { TableService } from '@app/core/service/list/table.service';
import { ClientesFormComponent } from '../clientes-form/clientes-form.component';


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
    this.showDialog( '', 'create', 'Agregar Cliente', ClientesFormComponent );
  }

  edit( item ) {
    this.showDialog( item, 'edit', 'Editar Cliente', ClientesFormComponent );
  }

  delete( item: Cliente ) {
    this.showDialog( item, 'delete', 'Delete Cliente', ClientesFormComponent );
  }

  showDialog( item , action: string, title: string,  component) {

    this.dialogRef = this.dialog.open( component, {
      data: { item, title, action },
      disableClose: true,
      autoFocus: true,
    });

    this.dialogRef.afterClosed().subscribe( result => console.log(result));
  }



}
