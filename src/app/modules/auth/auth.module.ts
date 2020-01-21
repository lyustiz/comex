import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [ AuthRoutingModule ]
})
export class AuthModule {

  constructor() { }
}
