import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ParametrosSearchComponent } from './components/parametros-search/parametros-search.component';
import { ParametrosListComponent } from './components/parametros-list/parametros-list.component';
import { ParametrosFormComponent } from './components/parametros-form/parametros-form.component';


@NgModule({
  declarations: [ParametrosSearchComponent, ParametrosListComponent, ParametrosFormComponent],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
