import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
// import { ListCartolasDataSource, ListCartolasItem } from './list-cartolas-datasource';

export interface ListCartolasItem {
  name: string;
  id: number;
}

const LIST_CARTOLAS: ListCartolasItem[] = [
  {id: 1,  name: 'Hydrogen'},
  {id: 2,  name: 'Helium'},
  {id: 3,  name: 'Lithium'},
  {id: 4,  name: 'Beryllium'},
  {id: 5,  name: 'Boron'},
  {id: 6,  name: 'Carbon'},
  {id: 7,  name: 'Nitrogen'},
  {id: 8,  name: 'Oxygen'},
  {id: 9,  name: 'Fluorine'},
  {id: 10, name: 'Neon'},
  {id: 11, name: 'Sodium'},
  {id: 12, name: 'Magnesium'},
  {id: 13, name: 'Aluminum'},
  {id: 14, name: 'Silicon'},
  {id: 15, name: 'Phosphorus'},
  {id: 16, name: 'Sulfur'},
  {id: 17, name: 'Chlorine'},
  {id: 18, name: 'Argon'},
  {id: 19, name: 'Potassium'},
  {id: 20, name: 'Calcium'},
];

@Component({
  selector: 'app-list-cartolas',
  templateUrl: './list-cartolas.component.html',
  styles: []
})
export class ListCartolasComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource <ListCartolasItem> (LIST_CARTOLAS);

  @ViewChild( MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild( MatSort,      {static: false}) sort: MatSort;
  @ViewChild( MatTable,     {static: false}) table: MatTable<ListCartolasItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered.
   */

  ngOnInit() {
   // this.dataSource = new ListCartolasDataSource();

    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort      = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource     = this.dataSource;
  }
}
