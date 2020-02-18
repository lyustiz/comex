import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { EjecutivosRoutingModule } from './ejecutivos-routing.module';
import { EjecutivosFormComponent } from './components/ejecutivos-form/ejecutivos-form.component';
import { EjecutivosListComponent } from './components/ejecutivos-list/ejecutivos-list.component';
import { EjecutivosSearchComponent } from './components/ejecutivos-search/ejecutivos-search.component';


@NgModule({
  declarations: [EjecutivosFormComponent, EjecutivosListComponent, EjecutivosSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    EjecutivosRoutingModule
  ],
  entryComponents: [
    EjecutivosFormComponent
  ]
})
export class EjecutivosModule { }
