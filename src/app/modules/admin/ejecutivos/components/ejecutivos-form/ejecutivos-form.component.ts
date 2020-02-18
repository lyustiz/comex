import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

import { FormBaseComponent } from '@shared/components/form-base/form-base.component';
import { FormService } from '@core/service/form/form.service';

import { EjecutivoService } from '@service/ejecutivo.service';
import { Ejecutivo } from '@model/ejecutivo.model';

@Component({
  selector: 'app-ejecutivos-form',
  templateUrl: './ejecutivos-form.component.html',
  styleUrls: ['./ejecutivos-form.component.scss']
})
export class EjecutivosFormComponent  extends FormBaseComponent implements OnInit {

  public sucursales = [
    { id: 1000, nb_status: 'sucursal 1' },
    { id: 999,  nb_status: 'sucursal 2' },
    { id: 998,  nb_status: 'sucursal 3' },
    { id: 997,  nb_status: 'sucursal 4' },
    { id: 996,  nb_status: 'sucursal 5' },
    { id: 995,  nb_status: 'sucursal 6' }
  ];

  public tipo = [
    { id: 1, nb_status: 'tipo 1' },
    { id: 2, nb_status: 'tipo 2' },
    { id: 3, nb_status: 'tipo 3' },
    { id: 4, nb_status: 'tipo 4' },
    { id: 5, nb_status: 'tipo 5' },
    { id: 6, nb_status: 'tipo 6' },
    { id: 7, nb_status: 'tipo 7' },
    { id: 8, nb_status: 'tipo 8' },
    { id: 9, nb_status: 'tipo 9' },
  ];

  constructor(public dialogRef: MatDialogRef<EjecutivosFormComponent>,
              public form: FormService,
              public formBuilder: FormBuilder,
              public ejecutivoService: EjecutivoService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialogRef, form, formBuilder, data);
  }

  ngOnInit() {
  }

  setForm() {
    this.formGroup = this.formBuilder.group({
      ejeRut: [ '', [ Validators.required ] ], // RUT
      ejeCod: [ '', [ Validators.required ] ], // CODIGO
      ejeTip: [ '', [ Validators.required ] ], // TIPO
      ejeNom: [ '', [ Validators.required ] ], // NOMBRE
      ejeSuc: [ '', [ Validators.required ] ], // SUCURSAL
      ejeTel: [ '', [ Validators.required ] ], // TELEFONO
      ejeFax: [ '', [ Validators.required ] ], // FAX
      ejeEml: [ '', [ Validators.required ] ], // EMAIL
    });
  }

  update() {
    this.ejecutivoService.updateEjecutivo(this.form.mapToTable(this.formGroup.value) as Ejecutivo, this.data.item.key);
  }

  create() {
    this.ejecutivoService.createEjecutivo(this.form.mapToTable(this.formGroup.value) as Ejecutivo);
  }

}
