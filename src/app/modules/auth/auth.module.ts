import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [ AuthRoutingModule, SharedModule, ReactiveFormsModule ]
})
export class AuthModule {

  constructor() { }
}
