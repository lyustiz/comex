import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Formatter as format } from '@shared/utils/formatter';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  mapFormFields(items: object, formFields: FormGroup, action: string) {
    if ( items &&  action === 'update' ) {
      for ( const field in items ) {
        if ( formFields.value.hasOwnProperty(format.toCamelCase(field))) {
          const fmtField = format.toCamelCase(field);
          formFields.get(fmtField).setValue(items[field]);
        }
      }
    } else {
      console.log('new');
    }
  }

  mapToTable( formFields: object) {

    const formatedField: object = {};
    if ( formFields ) {
     for ( const field in formFields ) {
        if ( formFields.hasOwnProperty(field) ) {
          formatedField[format.toUpperCamelCase(field)] = formFields[field];
        }
      }
    }
    return formatedField;
  }
}
