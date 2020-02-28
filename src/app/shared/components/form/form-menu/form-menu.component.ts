import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.scss']
})
export class FormMenuComponent implements OnInit {

 @Input() columns: string[];
 @Output() hideCol = new EventEmitter();

 public colsControl;


  constructor() { }



  ngOnInit() {
    this.colsControl =  [].concat(this.columns);
  }

  alerta(i, evento) {
    if (!evento.checked) {
      this.columns.splice(i, 1);
    } else {
      this.columns.splice(i, 0, evento.source.name);
    }
    this.hideCol.emit(this.columns);
  }

}
