import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static isExpesive( control: AbstractControl) {
    return ( control.value > 5000 ) ? { expensive: true } : false;
  }
}
