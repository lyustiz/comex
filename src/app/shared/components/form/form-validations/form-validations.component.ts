import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.scss']
})
export class FormValidationsComponent implements OnInit {

  @Input() formField: AbstractControl;

  @Input() fieldName: string;

  constructor() { }

  ngOnInit() {
    // console.log(this.formField, this.fieldName);
  }
}

