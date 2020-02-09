import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CobranzasRoutingModule } from './cobranzas-routing.module';
import { CobranzasCertificarComponent } from './components/cobranzas-certificar/cobranzas-certificar.component';
import { CobranzasSearchComponent } from './components/cobranzas-search/cobranzas-search.component';
import { CobranzasListComponent } from './components/cobranzas-list/cobranzas-list.component';
import { CobranzasFormComponent } from './components/cobranzas-form/cobranzas-form.component';


@NgModule({
  declarations: [CobranzasCertificarComponent, CobranzasSearchComponent, CobranzasListComponent, CobranzasFormComponent],
  imports: [
    CommonModule,
    CobranzasRoutingModule
  ]
})
export class CobranzasModule { }
