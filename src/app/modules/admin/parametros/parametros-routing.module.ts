import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ParametrosListComponent } from './components/parametros-list/parametros-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ParametrosListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
