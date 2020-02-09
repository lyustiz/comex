import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockColocacionesListComponent } from './components/stock-colocaciones-list/stock-colocaciones-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: StockColocacionesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockColocacionesRoutingModule { }
