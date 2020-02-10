import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormService } from '@core/service/form/form.service';


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  public formGroup: FormGroup;

  public title: string;

  public status = [
                    { id: 1, nb_status: 'activo'  },
                    { id: 2, nb_status: 'inactivo'}
                  ];

  constructor(
    public dialogRef: MatDialogRef<ClientesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder,
    public form: FormService
  ) {
    this.title = this.data.title;
    this.setForm();
    this.form.mapFormFields(this.data.item, this.formGroup, this.data.action);
  }

  ngOnInit() { }

  setForm(): void {
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
    if (this.formGroup.valid) {
      console.log();
    }
  }

}
