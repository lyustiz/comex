import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Sucursal } from '@model/sucursal.model';

@Component({
  selector: 'app-sucursal-create',
  templateUrl: './sucursal-create.component.html',
  styleUrls: [ './sucursal-create.component.scss' ]
})

export class SucursalCreateComponent implements OnInit {

  public formGroup: FormGroup;
  public title: string;

  constructor(
    public dialogRef: MatDialogRef<SucursalCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder
  ) {
      this.setForm();
      this.title = this.data.title;
  }

  ngOnInit() {
    console.log(this.data);
  }

  setForm() {
    this.formGroup = this.formBuilder.group({
      id:	                [ '', [ Validators.required ] ],
      co_sucursal:	      [ '', [ Validators.required ] ],
      nu_sucursal:	      [ '', [ Validators.required ] ],
      tx_glosa_sucursal:	[ '', [ Validators.required ] ],
      tx_direccion:	      [ '', [ Validators.required ] ],
      nu_direccion:	      [ '', [ Validators.required ] ],
      tx_comuna:	        [ '', [ Validators.required ] ],
      tx_telefono:	      [ '', [ Validators.required ] ],
      tx_fax:	            [ '', [ Validators.required ] ],
      nu_flg_Idc_banco:	  [ '', [ Validators.required ] ],
      nu_banco:	          [ '', [ Validators.required ] ],
      tx_email_agente:	  [ '', [ Validators.required, Validators.email ] ],
      id_usuario:	        [ '', [ Validators.required ] ],
      id_status:	        [ '', [ Validators.required ] ],
      fe_creado:	        [ '', [ Validators.required ] ],
      fe_actualizado:	    [ '', [ Validators.required ] ],
    });
  }

  close(): void {
    this.dialogRef.close(this.data);
  }

  send(): void {
    console.log();
  }


}
