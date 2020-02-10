import { Injectable, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource,   } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public data: any[];
  public filterField: string = null;

  constructor(private dialog: MatDialog) { }

  public dataSource = new MatTableDataSource <any> (this.data);

  @ViewChild( MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild( MatSort, {static: false}) sort: MatSort;

  getData( dataSource: Observable<any>) {
    dataSource.subscribe(
      data => {
        this.dataSource.data = data;
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


}
