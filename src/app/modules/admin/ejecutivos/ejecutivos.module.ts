import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecutivosRoutingModule } from './ejecutivos-routing.module';
import { EjecutivosFormComponent } from './components/ejecutivos-form/ejecutivos-form.component';
import { EjecutivosListComponent } from './components/ejecutivos-list/ejecutivos-list.component';
import { EjecutivosSearchComponent } from './components/ejecutivos-search/ejecutivos-search.component';


@NgModule({
  declarations: [EjecutivosFormComponent, EjecutivosListComponent, EjecutivosSearchComponent],
  imports: [
    CommonModule,
    EjecutivosRoutingModule
  ]
})
export class EjecutivosModule { }
