import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.scss']
})
export class FormValidationsComponent implements OnInit {

  public formShow: boolean;

  @Input() formControl: AbstractControl;

  @Input() fieldName: string;

  constructor() {
      console.log(this.formControl, this.fieldName)
  }

  ngOnInit() { }




  /* <mat-error *ngIf="password.invalid && password.touched">
                {{ (password.hasError('required'))  ? 'Password requerido' : ''}}
                {{ (password.hasError('minlength')) ? 'La contraseña debe tener almenos 8 caracteres': '' }}
              </mat-error>
   */
}
