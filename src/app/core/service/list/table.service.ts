import { Injectable } from '@angular/core';
import { MatTableDataSource  } from '@angular/material/table';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public data: any[];
  public filterField: string = null;
  public loading = true;

  constructor() { }

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


  applyFilter(filterValue: string) {

    console.log(filterValue);
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
