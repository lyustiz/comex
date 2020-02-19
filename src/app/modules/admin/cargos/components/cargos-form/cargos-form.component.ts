import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

import { FormBaseComponent } from '@shared/components/form/form-base/form-base.component';
import { FormService } from '@core/service/form/form.service';

import { CargoService } from '@service/cargo.service';
import { Cargo } from '@model/cargo.model';

@Component({
  selector: 'app-cargos-form',
  templateUrl: './cargos-form.component.html',
  styleUrls: ['./cargos-form.component.scss']
})
export class CargosFormComponent extends FormBaseComponent implements OnInit {

  public sucursales = [
    { id: 1000, nb_status: 'sucursal 1' },
    { id: 999,  nb_status: 'sucursal 2' },
    { id: 998,  nb_status: 'sucursal 3' },
    { id: 997,  nb_status: 'sucursal 4' },
    { id: 996,  nb_status: 'sucursal 5' },
    { id: 995,  nb_status: 'sucursal 6' }
  ];

  constructor(public dialogRef: MatDialogRef<FormBaseComponent>,
              public form: FormService,
              public formBuilder: FormBuilder,
              public cargoService: CargoService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialogRef, form, formBuilder, data);
}

  ngOnInit() {
  }

  setForm() {

    const rows = parseInt(this.data.rows, 10) + 1;
    this.formGroup = this.formBuilder.group({
      codCgoPsn:      [ rows, [ Validators.required ] ],  // CODIGO
      glsCgoPsn:      [ '', [ Validators.required ] ],  // GLOSA
      numCrvOrdCgo:   [ rows, [ Validators.required ] ],  // ACTIVO
    });
  }

  update() {
    this.cargoService.updateCargo(this.form.mapToTable(this.formGroup.value) as Cargo, this.data.item.key);
  }

  create() {
    this.cargoService.createCargo(this.form.mapToTable(this.formGroup.value) as Cargo);
  }

}
