import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.scss']
})
export class FormMenuComponent implements OnInit {

 @Input() columns: string[];
 @Output() showHideCol = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showHide(index, colum, event) {
    this.showHideCol.emit( { index, colum, checked: event.source.checked } );
  }

}
