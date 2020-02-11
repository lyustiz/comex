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
import { FormValidationsComponent } from './components/form/app-validator/app-validator.component';
import { ListButtonsComponent } from './components/list/list-buttons/list-buttons.component';
import { ListHeaderComponent } from './components/list/list-header/list-header.component';
import { FormMenuComponent } from './components/form/form-menu/form-menu.component';
import { FormFilterComponent } from './components/form/form-filter/form-filter.component';
import { TableFilterComponent } from './components/list/table-filter/table-filter.component';

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
    FormMenuComponent,
    TableFilterComponent
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
    FormMenuComponent,
    FormFilterComponent,
    TableFilterComponent,
  ],
})

export class SharedModule { }
