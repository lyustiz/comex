import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargosRoutingModule } from './cargos-routing.module';
import { CargosSearchComponent } from './components/cargos-search/cargos-search.component';
import { CargosListComponent } from './components/cargos-list/cargos-list.component';
import { CargosFormComponent } from './components/cargos-form/cargos-form.component';


@NgModule({
  declarations: [CargosSearchComponent, CargosListComponent, CargosFormComponent],
  imports: [
    CommonModule,
    CargosRoutingModule
  ]
})
export class CargosModule { }
