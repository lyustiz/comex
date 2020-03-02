import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { TableService } from '@app/core/service/list/table.service';

import { SucursalService } from '@service/sucursal.service';
import { SucursalesFormComponent } from '../sucursales-form/sucursales-form.component';

@Component({
  selector: 'app-sucursales-list',
  templateUrl: './sucursales-list.component.html',
  styleUrls: ['./sucursales-list.component.scss']
})
export class SucursalesListComponent implements OnInit, AfterViewInit {

  private dialogRef: MatDialogRef<any>;

  @ViewChild( MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild( MatSort, {static: false}) sort: MatSort;

  constructor(
    public sucursalService: SucursalService,
    public dialog: MatDialog,
    public table: TableService
  ) {  }

  ngOnInit() {
    this.table.getData(this.sucursalService.getSucursales());
    this.table.setDefineCols(this.defineCols());
    this.table.setColums();
  }

  ngAfterViewInit() {
    this.table.dataSource.paginator = this.paginator;
    this.table.dataSource.sort = this.sort;
  }

  defineCols() {
    return [
      { colum: 'SUC_COD', visible: true, label: 'Cod. Suc' },
      { colum: 'SUC_GLS', visible: true, label: 'Num. Suc'},
      { colum: 'SUC_DIR', visible: true, label: 'Glosa'},
      { colum: 'SUC_DIR_NUM', visible: true, label: 'Direccion'},
      { colum: 'SUC_DIR_COM', visible: true, label: 'Nro'},
      { colum: 'SUC_TEL_NUM', visible: true, label: 'Comuna'},
      { colum: 'SUC_COD_NUM', visible: true, label: 'Telefono'},
      { colum: 'SUC_FAX_NUM', visible: true, label: 'Fax'},
      { colum: 'FLG_IDC_BANCO_ORIGN', visible: true, label: 'Flg. Bco'},
      { colum: 'NRO_NVO_BANCO', visible: true, label: 'Num. Bco'},
      { colum: 'GLS_EML_AGT', visible: true, label: 'Email. Agte.'},
      { colum: 'ACTIONS', visible: true, label: 'Acciones'},
    ];
  }

  create() {
    this.showForm( '', 'create', 'Agregar Sucursal', SucursalesFormComponent );
  }

  edit( item ) {
    this.showForm( item, 'update', 'Editar Sucursal', SucursalesFormComponent );
  }

  delete( item ) {

    const description = `Desea eliminar la Sucursal ${item.SUC_GLS} ?`;

    this.showDialog('Atencion', description, 'confirm', DialogComponent);

    this.dialogRef.afterClosed().subscribe( result => {
      if ( result.confirm ) {
        this.sucursalService.deleteSucursal( item.key );
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
