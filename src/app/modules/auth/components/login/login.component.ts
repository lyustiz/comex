import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { AuthService } from '@core/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css']
})

export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  isHidden = true;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {

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
     this.authService.logIn(this.formLogin.value.user, this.formLogin.value.password);
    }
  }

  get user() {
    return this.formLogin.get('user');
  }

  get password() {
    return this.formLogin.get('password');
  }

}
