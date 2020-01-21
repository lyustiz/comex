import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule  } from './material/material.module';
import { AppNavbarComponent  } from './app-navbar/app-navbar.component';

@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    AppNavbarComponent
  ],
  declarations: [
    AppNavbarComponent
  ],
})

export class SharedModule { }
