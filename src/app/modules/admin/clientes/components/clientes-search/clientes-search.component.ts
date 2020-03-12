import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators as cValidators} from '@shared/utils/validators';

import { FormService } from '@core/service/form/form.service';

@Component({
  selector: 'app-clientes-search',
  templateUrl: './clientes-search.component.html',
  styleUrls: ['./clientes-search.component.scss']
})
export class ClientesSearchComponent implements OnInit {

  public formGroup: FormGroup;

  public currentComponent = null;

  @Output() searchCliente = new EventEmitter();

  constructor(public formBuilder: FormBuilder,
              public formService: FormService) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      cliRut:	      [ '', [ Validators.required, cValidators.rut ] ],     // RUT
      cliNom:	      [ '' ],                       // NOMBRE
    });
  }

  search() {
    if (this.formGroup.valid) {
      this.searchCliente.emit(this.formGroup.value);
    }
  }

  formField(field: string) {
    return this.formGroup.get(field);
  }

}
