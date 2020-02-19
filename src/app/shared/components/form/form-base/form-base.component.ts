import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FormService } from '@core/service/form/form.service';


@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {

  public formGroup: FormGroup;

  public formFields = [];

  constructor(
    public dialogRef: MatDialogRef<FormBaseComponent>,
    public form: FormService,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.setForm();
    this.form.mapFormFields(this.data.item, this.formGroup, this.data.action);
  }

  ngOnInit() { }

  setForm() { }

  formField(field: string) {
    return this.formGroup.get(field);
  }

  close(): void {
    this.dialogRef.close(this.data);
  }

  send(): void {

    if (this.formGroup.invalid) { return; }

    switch (this.data.action) {
      case 'update':
        this.update();
        break;
      case 'create':
        this.create();
        break;
    }

    this.close();
  }

  update() {  }

  create() {  }


}
