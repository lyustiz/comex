import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidators as cValidators} from '@shared/utils/validators';
import { FormService } from '@core/service/form/form.service';
import { ClientesService } from '@service/clientes.service';
import { Cliente } from '@model/cliente.model';


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  public formGroup: FormGroup;

  public formFields = [];

  public status = [
                    { id: 1, nb_status: 'activo'  },
                    { id: 2, nb_status: 'inactivo'}
                  ];

  constructor(
    public dialogRef: MatDialogRef<ClientesFormComponent>,
    public formBuilder: FormBuilder,
    public form: FormService,
    public clientesService: ClientesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.setForm();
    this.form.mapFormFields(this.data.item, this.formGroup, this.data.action);
  }

  ngOnInit() { }

  setForm(): void {
    this.formGroup = this.formBuilder.group({
      cliRut:	      [ '', [ Validators.required, cValidators.rut ] ],     // RUT
      cliNom:	      [ '', [ Validators.required ] ],                      // NOMBRE
      cliDir:	      [ '', [ Validators.required ] ],                      // DIRECCION
      cliDir2:      [ '', [ Validators.required ] ],                      // DIRECCION2
      cliCom:	      [ '', [ Validators.required ] ],                      // COMUNA
      cliCiu:	      [ '', [ Validators.required ] ],                      // CIUDAD
      cliFon:	      [ '', [ Validators.required ] ],                      // FONO
      cliFax:	      [ '', [ Validators.required ] ],                      // FAX
      cliCas:	      [ '', [ Validators.required, cValidators.number ] ],  // CASILLA
      cliEml:	      [ '', [ Validators.required, cValidators.email ] ],   // EMAIL
      cliEml2:      [ '', [ Validators.required, cValidators.email ] ],   // EMAIL2
      cliSrvEml:	  [ '', [ Validators.required ] ],                      // ENVIO EMAIL
      cliSrvFax:	  [ '', [ Validators.required ] ],                      // ENVIO FAX
      cliSrvMai:	  [ '', [ Validators.required ] ],                      // _
      cliCodSuc:	  [ '', [ Validators.required ] ],                      // CODIGO SUCURSAL
      cliRutEjeCta:	[ '', [ Validators.required, cValidators.rut ] ],     // RUT EJECUTIVO CE CUENTAS
      cliTipCli:	  [ '', [ Validators.required ] ],                      // FUENTE CLIENTE
      cliRutEjeCmx:	[ '', [ Validators.required, cValidators.rut ] ],     // RUT EJE. COMEX
      cliRutEspCmx:	[ '', [ Validators.required, cValidators.rut ] ],     // RUT ESP. COMEX
      cliNumCtl:	  [ '', [ Validators.required, cValidators.digits ] ],  // SEGMENTO
      cliSex:	      [ '', [ Validators.required ] ],                      // SEXO
      cliNumDiaVno:	[ '', [ Validators.required ] ],                      // DIAS DE VENCIMIENTO
    });
  }

  formField(field: string) {
    return this.formGroup.get(field);
  }

  close(): void {
    this.dialogRef.close(this.formGroup.value);
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

  update() {
    this.clientesService.updateCliente(this.form.mapToTable(this.formGroup.value) as Cliente, this.data.item.key);
  }

  create() {
    this.clientesService.createCliente(this.form.mapToTable(this.formGroup.value) as Cliente);
  }
}
