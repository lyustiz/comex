import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InterfacesListComponent } from './components/interfaces-list/interfaces-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: InterfacesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfacesRoutingModule { }
