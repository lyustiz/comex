import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FlujosListComponent } from './components/flujos-list/flujos-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: FlujosListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlujosRoutingModule { }
