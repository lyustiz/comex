import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

import { SharedModule } from '@shared/shared.module';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';

@NgModule({
  declarations: [ LoginComponent, PasswordRecoveryComponent ],
  imports: [ AuthRoutingModule, SharedModule, ReactiveFormsModule ]
})
export class AuthModule {

  constructor() { }
}
