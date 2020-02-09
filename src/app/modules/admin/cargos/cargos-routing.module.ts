import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargosListComponent } from './components/cargos-list/cargos-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: CargosListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargosRoutingModule { }
