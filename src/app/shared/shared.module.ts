import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [
    AppNavbarComponent
  ],
  declarations: [
    AppNavbarComponent
  ],
})

export class SharedModule { }
