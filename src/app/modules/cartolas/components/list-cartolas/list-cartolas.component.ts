import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SearchCartolasComponent } from '../search-cartolas/search-cartolas.component';



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

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource <ListCartolasItem> (LIST_CARTOLAS);
  filterField: string = null;

  @ViewChild( MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild( MatSort, {static: false}) sort: MatSort;
 // @ViewChild( MatTable,     {static: false}) table: MatTable<ListCartolasItem>;

  constructor( public dialog: MatDialog ) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.sort      = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.table.dataSource     = this.dataSource;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearFilter(): void {
    this.dataSource.filter = '';
    this.filterField = '';
  }


  open() {

    this.dialog.open( SearchCartolasComponent, {
      height: '600px',
      width:  '800px'
    });
  }
}
