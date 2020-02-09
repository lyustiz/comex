import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CobranzasListComponent } from './components/cobranzas-list/cobranzas-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: CobranzasListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CobranzasRoutingModule { }
