import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlujosRoutingModule } from './flujos-routing.module';
import { FlujosFormComponent } from './components/flujos-form/flujos-form.component';
import { FlujosListComponent } from './components/flujos-list/flujos-list.component';
import { FlujosCertificarComponent } from './components/flujos-certificar/flujos-certificar.component';
import { FlujosSearchComponent } from './components/flujos-search/flujos-search.component';


@NgModule({
  declarations: [FlujosFormComponent, FlujosListComponent, FlujosCertificarComponent, FlujosSearchComponent],
  imports: [
    CommonModule,
    FlujosRoutingModule
  ]
})
export class FlujosModule { }
