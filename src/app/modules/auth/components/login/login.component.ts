import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css']
})

export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  isHidden = true;

  constructor( private formBuilder: FormBuilder) {

    this.buildForm();
  }

  ngOnInit() {  }

  private buildForm() {
    this.formLogin = this.formBuilder.group({
      user:     ['', [Validators.required] ],
      password: ['', [Validators.required, Validators.minLength(8)] ]
    });
  }

  public onSubmit(event: Event) {
    event.preventDefault();
    if ( this.formLogin.valid ) {
      console.log(this.formLogin.value);
    }
  }

  get user() {
    return this.formLogin.get('user');
  }

  get password() {
    return this.formLogin.get('password');
  }

}
