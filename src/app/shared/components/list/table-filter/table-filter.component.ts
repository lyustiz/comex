import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-table-filter',
  template: `
  <div class="col-md-6 mt-2">
      <mat-form-field class="w-100" >
        <mat-label>Buscar</mat-label>
        <input matInput
          (keyup)="filter.emit($event.target.value)"
          placeholder="Indique texto a buscar"
          [(ngModel)]="inputModel">
        <button matSuffix mat-icon-button (click)="clean()">
          <mat-icon>clear</mat-icon>
        </button>
      </mat-form-field>
    </div>
 `
})
export class TableFilterComponent implements OnInit {

  constructor() { }

  @Input() inputModel: string;
  @Output() filter = new EventEmitter<string>();
  @Output() clear = new EventEmitter();

  ngOnInit() {
  }
  clean() {
    this.inputModel = '';
    this.clear.emit();
  }

}
