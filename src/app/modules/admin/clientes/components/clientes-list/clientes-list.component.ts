import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { TableService } from '@app/core/service/list/table.service';

import { ClientesService } from '@service/clientes.service';
import { ClientesFormComponent } from '../clientes-form/clientes-form.component';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.scss']
})
export class ClientesListComponent implements OnInit, AfterViewInit {

  private dialogRef: MatDialogRef<any>;

  @ViewChild( MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild( MatSort, {static: false}) sort: MatSort;

  @Input()  dataFilter;
  @Output() searchData = new EventEmitter();

  constructor(
    public clientesService: ClientesService,
    public dialog: MatDialog,
    public table: TableService
  ) { }

  ngOnInit() {

    this.dataFilter =  {CLI_RUT: '10095179-7'};
    this.table.getData(this.clientesService.getClientes(this.dataFilter));
    this.table.setDefineCols(this.defineCols());
    this.table.setColums();
  }

  ngAfterViewInit() {
    this.table.dataSource.paginator = this.paginator;
    this.table.dataSource.sort = this.sort;
  }

  defineCols() {
    return [
      { colum: 'CLI_RUT', visible: true, label: 'Rut Cliente' },
      { colum: 'CLI_NOM', visible: true, label: 'Nombre'      },
      { colum: 'CLI_DIR', visible: true, label: 'Direccion'   },
      { colum: 'CLI_CIU', visible: true, label: 'Ciudad'      },
      { colum: 'CLI_COM', visible: true, label: 'Comuna'      },
      { colum: 'CLI_FON', visible: true, label: 'Fono'        },
      { colum: 'CLI_EML', visible: true, label: 'Email'       },
      { colum: 'ACTIONS', visible: true, label: 'Acciones'    }
    ];
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

  searchCliente(formData){

    console.log(formData);
   }


}
