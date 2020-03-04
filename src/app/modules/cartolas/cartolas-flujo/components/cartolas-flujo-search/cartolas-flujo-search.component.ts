import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators as cValidators} from '@shared/utils/validators';
@Component({
  selector: 'app-cartolas-flujo-search',
  templateUrl: './cartolas-flujo-search.component.html',
  styleUrls: ['./cartolas-flujo-search.component.scss']
})
export class CartolasFlujoSearchComponent implements OnInit {

  public formGroup: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      cliRut:	      [ '', [ Validators.required, cValidators.rut ] ],     // RUT
      procod:	      [ '', [ Validators.required] ],     // RUT
      prosub:	      [ '', [ Validators.required] ],     // RUT
      eveedo:	      [ '', [ Validators.required] ],     // RUT
      fecini:	      [ '', [ Validators.required] ],     // RUT
      fecfin:	      [ '', [ Validators.required] ],     // RUT
      refbco:	      [ '', [ Validators.required] ],     // RUT
      cliref:	      [ '', [ Validators.required] ],     // RUT
    });
  }


}
