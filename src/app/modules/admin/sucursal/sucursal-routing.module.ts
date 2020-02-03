import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SucursalListComponent } from './componets/sucursal-list/sucursal-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: SucursalListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalRoutingModule { }
