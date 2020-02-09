import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartolasStockListComponent } from './components/cartolas-stock-list/cartolas-stock-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: CartolasStockListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartolasStockRoutingModule { }
