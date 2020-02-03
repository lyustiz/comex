import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

import { Sucursal } from '@model/sucursal.model';



@Component({
  selector: 'app-sucursal-create',
  templateUrl: './sucursal-create.component.html',
  styleUrls: [ './sucursal-create.component.scss' ]
})
export class SucursalCreateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SucursalCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sucursal,
    public formGroup: FormGroup
  ) { }

  ngOnInit() {
    console.log(this.data);

    // this.formGroup

  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }


}
