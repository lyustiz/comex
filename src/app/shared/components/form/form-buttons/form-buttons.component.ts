import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.scss']
})
export class FormButtonsComponent implements OnInit {

  constructor() { }

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  ngOnInit() {
  }

}
