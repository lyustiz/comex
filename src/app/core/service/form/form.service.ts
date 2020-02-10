import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  mapFormFields(items: object, formFields: FormGroup, action: string) {

    if ( items &&  action === 'update' ) {
      for ( const field in items ) {
          if ( formFields.value.hasOwnProperty(field)) {
            formFields.get(field).setValue(items[field]);
          }
      }
    } else {
      console.log('sin data');
    }
  }
}
