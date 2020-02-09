import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuadreFlujoRoutingModule } from './cuadre-flujo-routing.module';
import { CuadreFlujoSearchComponent } from './components/cuadre-flujo-search/cuadre-flujo-search.component';
import { CuadreFlujoListComponent } from './components/cuadre-flujo-list/cuadre-flujo-list.component';
import { CuadreFlujoPrintComponent } from './components/cuadre-flujo-print/cuadre-flujo-print.component';


@NgModule({
  declarations: [CuadreFlujoSearchComponent, CuadreFlujoListComponent, CuadreFlujoPrintComponent],
  imports: [
    CommonModule,
    CuadreFlujoRoutingModule
  ]
})
export class CuadreFlujoModule { }
