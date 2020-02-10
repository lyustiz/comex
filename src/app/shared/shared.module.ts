import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';

// Shared Components
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { NavBarComponent } from '@shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { FormButtonsComponent } from './components/form/form-buttons/form-buttons.component';
import { FormHeaderComponent } from './components/form/form-header/form-header.component';
import { FormValidationsComponent } from './components/form/form-validations/form-validations.component';
import { ListButtonsComponent } from './components/list/list-buttons/list-buttons.component';
import { ListHeaderComponent } from './components/list/list-header/list-header.component';

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
    FormButtonsComponent,
    FormHeaderComponent,
    FormValidationsComponent,
    ListButtonsComponent,
    ListHeaderComponent,
  ],
  declarations: [
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
    FormButtonsComponent,
    FormHeaderComponent,
    FormValidationsComponent,
    ListButtonsComponent,
    ListHeaderComponent,
  ],
})

export class SharedModule { }
