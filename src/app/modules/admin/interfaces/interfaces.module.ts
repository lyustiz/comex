import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterfacesRoutingModule } from './interfaces-routing.module';
import { InterfacesFormComponent } from './components/interfaces-form/interfaces-form.component';
import { InterfacesListComponent } from './components/interfaces-list/interfaces-list.component';
import { InterfacesSearchComponent } from './components/interfaces-search/interfaces-search.component';


@NgModule({
  declarations: [InterfacesFormComponent, InterfacesListComponent, InterfacesSearchComponent],
  imports: [
    CommonModule,
    InterfacesRoutingModule
  ]
})
export class InterfacesModule { }
