import { Injectable } from '@angular/core';
import { MatTableDataSource  } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

interface DefColums {
  colum: string;
  visible: boolean;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public data: any[];
  public filterField: string = null;
  public loading = true;
  public dialogRef: MatDialogRef<any>;
  public columns: string[] ;
  public defineCols: DefColums[];

  constructor(
    public dialog: MatDialog,
  ) {
    this.loading = true;
   }

  public dataSource = new MatTableDataSource <any> (this.data);

  getData( dataSource: Observable<any>) {
    dataSource.subscribe(
      data => {
        this.dataSource.data = data;
        this.loading = false;
      },
      error => {
        console.error(error);
      }
    );
  }

  setDefineCols(defineCols) {
    this.defineCols = defineCols;
  }

  setColums() {
    this.columns = [];
    for (const colum of  this.defineCols) {
      if ( colum.visible ) {
        this.columns.push(colum.colum);
      }
    }
  }

  getLabel(ColumnName: string) {
    for (const cols of this.defineCols) {
      if ( ColumnName === cols.colum ) {
        return cols.label;
      }
    }
    return null;
  }

  showHideCols(payload) {
    this.defineCols[payload.index].visible = payload.checked;
    this.setColums();
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

  showDialog( title: string, description: string, type: string, component) {
    this.dialogRef = this.dialog.open( component, {
      data: { title, description, type },
      disableClose: true,
      autoFocus: true,
    });
  }

}
