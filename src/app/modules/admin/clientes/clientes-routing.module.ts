import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ClientesListComponent } from './components/clientes-list/clientes-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ClientesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
