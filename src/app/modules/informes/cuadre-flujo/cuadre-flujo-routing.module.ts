import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuadreFlujoListComponent } from './components/cuadre-flujo-list/cuadre-flujo-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: CuadreFlujoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuadreFlujoRoutingModule { }
