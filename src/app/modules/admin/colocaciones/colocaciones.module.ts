import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColocacionesRoutingModule } from './colocaciones-routing.module';
import { ColocacionesFormComponent } from './components/colocaciones-form/colocaciones-form.component';
import { ColocacionesListComponent } from './components/colocaciones-list/colocaciones-list.component';
import { ColocacionesSearchComponent } from './components/colocaciones-search/colocaciones-search.component';
import { ColocacionesCertificarComponent } from './components/colocaciones-certificar/colocaciones-certificar.component';


@NgModule({
  declarations: [ColocacionesFormComponent, ColocacionesListComponent, ColocacionesSearchComponent, ColocacionesCertificarComponent],
  imports: [
    CommonModule,
    ColocacionesRoutingModule
  ]
})
export class ColocacionesModule { }
