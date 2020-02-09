import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { SucursalesSearchComponent } from './components/sucursales-search/sucursales-search.component';
import { SucursalesListComponent } from './components/sucursales-list/sucursales-list.component';
import { SucursalesFormComponent } from './components/sucursales-form/sucursales-form.component';


@NgModule({
  declarations: [SucursalesSearchComponent, SucursalesListComponent, SucursalesFormComponent],
  imports: [
    CommonModule,
    SucursalesRoutingModule
  ]
})
export class SucursalesModule { }
