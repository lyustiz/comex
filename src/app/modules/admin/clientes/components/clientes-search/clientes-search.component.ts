import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators as cValidators} from '@shared/utils/validators';

@Component({
  selector: 'app-clientes-search',
  templateUrl: './clientes-search.component.html',
  styleUrls: ['./clientes-search.component.scss']
})
export class ClientesSearchComponent implements OnInit {

  public formGroup: FormGroup;

  public currentComponent = null;

  @Output() searchCliente = new EventEmitter();

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      cliRut:	      [ '', [ Validators.required, cValidators.rut ] ],     // RUT
      cliNom:	      [ '', [ Validators.required] ],                       // NOMBRE
    });
  }

  search() {
    this.searchCliente.emit(this.formGroup.value);
  }









  formField(field: string) {
    return this.formGroup.get(field);
  }

}
