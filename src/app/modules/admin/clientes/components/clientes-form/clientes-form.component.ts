import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators as cValidators} from '@shared/utils/validators';

import { FormService } from '@core/service/form/form.service';
import { ClientesService } from '@service/clientes.service';

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
    public form: FormService,
    public clientesService: ClientesService
  ) {
    this.title = this.data.title;
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

  get cliRut() {
    return this.formGroup.get('cliRut');
  }
  get cliNom() {
    return this.formGroup.get('cliNom');
  }
  get cliDir() {
    return this.formGroup.get('cliDir');
  }
  get cliDir2() {
    return this.formGroup.get('cliDir2');
  }
  get cliCom() {
    return this.formGroup.get('cliCom');
  }
  get cliCiu() {
    return this.formGroup.get('cliCiu');
  }
  get cliFon() {
    return this.formGroup.get('cliFon');
  }
  get cliFax() {
    return this.formGroup.get('cliFax');
  }
  get cliCas() {
    return this.formGroup.get('cliCas');
  }
  get cliEml() {
    return this.formGroup.get('cliEml');
  }
  get cliEml2() {
    return this.formGroup.get('cliEml2');
  }
  get cliSrvEml() {
    return this.formGroup.get('cliSrvEml');
  }
  get cliSrvFax() {
    return this.formGroup.get('cliSrvFax');
  }
  get cliSrvMai() {
    return this.formGroup.get('cliSrvMai');
  }
  get cliCodSuc() {
    return this.formGroup.get('cliCodSuc');
  }
  get cliRutEjeCta() {
    return this.formGroup.get('cliRutEjeCta');
  }
  get cliTipCli() {
    return this.formGroup.get('cliTipCli');
  }
  get cliRutEjeCmx() {
    return this.formGroup.get('cliRutEjeCmx');
  }
  get cliRutEspCmx() {
    return this.formGroup.get('cliRutEspCmx');
  }
  get cliNumCtl() {
    return this.formGroup.get('cliNumCtl');
  }
  get cliSex() {
    return this.formGroup.get('cliSex');
  }
  get cliNumDiaVno() {
    return this.formGroup.get('cliNumDiaVno');
  }

  close(): void {
    this.dialogRef.close(this.data);
  }

  send(): void {
    if (this.formGroup.valid) {
      this.clientesService.updateCliente(this.formGroup.value, this.formGroup.value.cliRut);
    }
  }

}
