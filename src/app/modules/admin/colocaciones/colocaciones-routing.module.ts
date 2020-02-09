import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ColocacionesListComponent } from './components/colocaciones-list/colocaciones-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ColocacionesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColocacionesRoutingModule { }
