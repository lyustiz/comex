import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  template: `
    <button mat-raised-button class="bg-danger text-white"(click)="closer.emit($event)">
      <mat-icon>close</mat-icon> Cancelar
    </button>
    <button mat-raised-button class="bg-warning text-white"(click)="reseter.emit($event)">
      <mat-icon>replay</mat-icon>Limpiar
    </button>
    <button mat-raised-button color="primary" class="text-white"(click)="sender.emit($event)" [disabled]="disable">
      <mat-icon>save</mat-icon> Guardar
    </button>
`

})
export class FormButtonsComponent implements OnInit {

  constructor() { }

  @Input() disable: boolean;

  @Output() closer  = new EventEmitter();
  @Output() reseter = new EventEmitter();
  @Output() sender  = new EventEmitter();

  ngOnInit() {
  }

}
