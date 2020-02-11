import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validator',
  templateUrl: './app-validator.component.html',
  styleUrls: ['./app-validator.component.scss']
})
export class FormValidationsComponent implements OnInit {

  @Input() formField: AbstractControl;

  @Input() fieldName: string;

  constructor() { }

  ngOnInit() {
    // console.log(this.formField, this.fieldName);
  }
}

