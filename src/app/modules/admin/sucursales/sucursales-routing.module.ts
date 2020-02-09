import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SucursalesListComponent } from './components/sucursales-list/sucursales-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: SucursalesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesRoutingModule { }
