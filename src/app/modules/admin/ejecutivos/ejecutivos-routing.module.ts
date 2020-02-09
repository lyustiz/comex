import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EjecutivosListComponent } from './components/ejecutivos-list/ejecutivos-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: EjecutivosListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjecutivosRoutingModule { }
