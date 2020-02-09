import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ServiciosListComponent } from './components/servicios-list/servicios-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ServiciosListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
