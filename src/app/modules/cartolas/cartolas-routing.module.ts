import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCartolasComponent } from './components/list-cartolas/list-cartolas.component';


const routes: Routes = [
  {
    path: '',
    component: ListCartolasComponent
  },
  {
    path: 'flujo',
    loadChildren: () => import('@module/cartolas/cartolas-flujo/cartolas-flujo.module').then( m => m.CartolasFlujoModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('@module/cartolas/cartolas-stock/cartolas-stock.module').then( m => m.CartolasStockModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartolasRoutingModule { }
