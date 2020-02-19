import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

import { FormBaseComponent } from '@shared/components/form/form-base/form-base.component';
import { FormService } from '@core/service/form/form.service';

import { SucursalService } from '@service/sucursal.service';
import { Sucursal } from '@model/sucursal.model';

@Component({
  selector: 'app-sucursales-form',
  templateUrl: './sucursales-form.component.html',
  styleUrls: ['./sucursales-form.component.scss']
})
export class SucursalesFormComponent extends FormBaseComponent implements OnInit {

  public sucursales = [
    { id: 1000, nb_status: 'sucursal 1' },
    { id: 999,  nb_status: 'sucursal 2' },
    { id: 998,  nb_status: 'sucursal 3' },
    { id: 997,  nb_status: 'sucursal 4' },
    { id: 996,  nb_status: 'sucursal 5' },
    { id: 995,  nb_status: 'sucursal 6' }
  ];

  public status = [
    { id: 1, nb_status: 'activo' },
    { id: 2, nb_status: 'inactivo'}
  ];

  constructor(public dialogRef: MatDialogRef<SucursalesFormComponent>,
              public form: FormService,
              public formBuilder: FormBuilder,
              public sucursalService: SucursalService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialogRef, form, formBuilder, data);
  }

  ngOnInit() {
  }

  setForm() {
    this.formGroup = this.formBuilder.group({
      sucCod:           [ '', [ Validators.required ] ],  // COD NEM
      sucGls:           [ '', [ Validators.required ] ],  // GLOSA
      sucDir:           [ '', [ Validators.required ] ],  // DIRECCION
      sucDirNum:        [ '', [ Validators.required ] ],  // DIRECCION Nº
      sucDirCom:        [ '', [ Validators.required ] ],  // COMUNA
      sucTelNum:        [ '', [ Validators.required ] ],  // NUMERO TELEFONO
      sucCodNum:        [ '', [ Validators.required ] ],  // COD NUMERO
      sucFaxNum:        [ '', [ Validators.required ] ],  // FAX
      flgIdcBancoOrign: [ '', [ Validators.required ] ],  // IDC
      nroNvoBanco:      [ '', [ Validators.required ] ],  // COD NVO
      glsEmlAgt:        [ '', [ Validators.required ] ],  // EMAIL AGENTE

    });
  }

  update() {
    this.sucursalService.updateSucursal(this.form.mapToTable(this.formGroup.value) as Sucursal, this.data.item.key);
  }

  create() {
    this.sucursalService.createSucursal(this.form.mapToTable(this.formGroup.value) as Sucursal);
  }

}
