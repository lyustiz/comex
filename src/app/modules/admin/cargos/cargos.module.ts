import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';


import { CargosRoutingModule } from './cargos-routing.module';
import { CargosSearchComponent } from './components/cargos-search/cargos-search.component';
import { CargosListComponent } from './components/cargos-list/cargos-list.component';
import { CargosFormComponent } from './components/cargos-form/cargos-form.component';


@NgModule({
  declarations: [CargosSearchComponent, CargosListComponent, CargosFormComponent],
  imports: [
    CommonModule,
    CargosRoutingModule,
    SharedModule
  ],
  entryComponents: [CargosFormComponent]
})
export class CargosModule { }
