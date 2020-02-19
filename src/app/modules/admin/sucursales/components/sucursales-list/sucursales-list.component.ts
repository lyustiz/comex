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

  public columns: string[] = [
                                'SUC_COD',
                                'SUC_GLS',
                                'SUC_DIR',
                                'SUC_DIR_NUM',
                                'SUC_DIR_COM',
                                'SUC_TEL_NUM',
                                'SUC_COD_NUM',
                                'SUC_FAX_NUM',
                                'FLG_IDC_BANCO_ORIGN',
                                'NRO_NVO_BANCO',
                                'GLS_EML_AGT',
                                'ACTIONS'
                              ];

  constructor(
    public sucursalService: SucursalService,
    public dialog: MatDialog,
    public table: TableService
  ) {
    this.table.getData(this.sucursalService.getSucursales());
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.table.dataSource.paginator = this.paginator;
    this.table.dataSource.sort = this.sort;
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
