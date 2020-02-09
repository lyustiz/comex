import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosSearchComponent } from './components/servicios-search/servicios-search.component';
import { ServiciosListComponent } from './components/servicios-list/servicios-list.component';
import { ServiciosFormComponent } from './components/servicios-form/servicios-form.component';


@NgModule({
  declarations: [ServiciosSearchComponent, ServiciosListComponent, ServiciosFormComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
