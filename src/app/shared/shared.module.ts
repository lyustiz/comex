import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    AppNavbarComponent
  ],
  declarations: [
    AppNavbarComponent,
  ],
})

export class SharedModule { }
