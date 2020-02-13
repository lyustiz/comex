import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-buttons',
  template: `
    <div>
      <button mat-icon-button (click)="editRow()" color="primary" class="mx-1" matTooltip="Editar" matTooltipPosition="left">
          <mat-icon>edit</mat-icon>
      </button>

      <button mat-icon-button (click)="deleteRow()" color="warn" class="mx-1" matTooltip="Eliminar" matTooltipPosition="right">
          <mat-icon>delete</mat-icon>
      </button>
  </div>
  `
})
export class ListButtonsComponent implements OnInit {

  @Input() row: object;

  @Output() edit   = new EventEmitter<object>();
  @Output() delete = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {  }

  editRow() {
    this.edit.emit(this.row);
  }

  deleteRow() {
    this.delete.emit(this.row);
  }

}
