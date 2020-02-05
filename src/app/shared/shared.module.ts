import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';

// Shared Components
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { NavBarComponent } from '@shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
  ],
  declarations: [
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
  ],
})

export class SharedModule { }
