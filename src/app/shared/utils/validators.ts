import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static email( control: AbstractControl) {

    // tslint:disable-next-line: max-line-length
    const REGEXP = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return REGEXP.test(control.value) ? null : {
      custom: {
        error: 'mail',
        valid: false,
        msj: 'Email invalido'
      }
    };
  }

  static date( control: AbstractControl) {

    // tslint:disable-next-line: max-line-length
    const REGEXP = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return REGEXP.test(control.value) ? null : {
      custom: {
        error: 'date',
        valid: false,
        msj: 'Fecha invalida'
      }
    };
  }

  static number( control: AbstractControl) {

    // tslint:disable-next-line: max-line-length
    const REGEXP = /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;

    return REGEXP.test(control.value) ? null : {
      custom: {
        error: 'number',
        valid: false,
        msj: 'Numero invalido'
      }
    };
  }

  static digits( control: AbstractControl) {

    // tslint:disable-next-line: max-line-length
    const REGEXP = /^\d+$/;

    return REGEXP.test(control.value) ? null : {
      custom: {
        error: 'digits',
        valid: false,
        msj: 'Indicar solo digitos'
      }
    };
  }

  static rut( control: AbstractControl) {

    const objError = {
      custom: {
            error: 'number',
            valid: false,
            msj: 'Indicar RUT valido 123456789-0'
          }
      };

    if (!control.value || control.value.trim().length < 3) { return objError; }

    const rutLimpio = control.value.replace(/[^0-9kK-]/g, null);

    if (rutLimpio.length < 3) { return objError; }

    const split = rutLimpio.split('-');
    if (split.length !== 2) { return objError; }

    const num = parseInt(split[0], 10);
    const dgv = split[1];

    const dvCalc = true; // this.calculateDV(num);
    return dvCalc === dgv;
  }

   calculateDV(rut) {
    const cuerpo = `${rut}`;
    // Calcular Dígito Verificador
    let suma = 0;
    let multiplo = 2;

    // Para cada dígito del Cuerpo
    for (let i = 1; i <= cuerpo.length; i++) {
      // Obtener su Producto con el Múltiplo Correspondiente
      const index = multiplo * parseInt( cuerpo.charAt( cuerpo.length - i ), 10 );

      // Sumar al Contador General
      suma += index;

      // Consolidar Múltiplo dentro del rango [2,7]
      if (multiplo < 7) {
        multiplo += 1;
      } else {
        multiplo = 2;
      }
    }

    // Calcular Dígito Verificador en base al Módulo 11
    const dvEsperado = 11 - (suma % 11);
    if (dvEsperado === 10) { return 'k'; }
    if (dvEsperado === 11) { return '0'; }
    return `${dvEsperado}`;
  }






}
