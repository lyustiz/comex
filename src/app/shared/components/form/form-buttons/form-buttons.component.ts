import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  template: `
    <button mat-raised-button class="bg-danger text-white" (click)="Cancel.emit()">
      <mat-icon>close</mat-icon> Cancelar
    </button>
    <button mat-raised-button class="bg-warning text-white" (click)="Reset.emit()">
      <mat-icon>replay</mat-icon>Limpiar
    </button>
    <button mat-raised-button color="primary" class="text-white" (click)="Send.emit()" [disabled]="disable">
      <mat-icon>save</mat-icon> Guardar
    </button>
`
})
export class FormButtonsComponent implements OnInit {

  constructor() { }

  @Input() disable: boolean;

  @Output() Cancel  = new EventEmitter();
  @Output() Reset = new EventEmitter();
  @Output() Send  = new EventEmitter();

  ngOnInit() {  }

}
