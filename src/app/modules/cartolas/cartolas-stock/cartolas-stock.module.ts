import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartolasStockRoutingModule } from './cartolas-stock-routing.module';
import { CartolasStockSearchComponent } from './components/cartolas-stock-search/cartolas-stock-search.component';
import { CartolasStockListComponent } from './components/cartolas-stock-list/cartolas-stock-list.component';
import { CartolasStockFormComponent } from './components/cartolas-stock-form/cartolas-stock-form.component';
import { CartolasStockDetailComponent } from './components/cartolas-stock-detail/cartolas-stock-detail.component';


@NgModule({
  declarations: [CartolasStockSearchComponent, CartolasStockListComponent, CartolasStockFormComponent, CartolasStockDetailComponent],
  imports: [
    CommonModule,
    CartolasStockRoutingModule
  ]
})
export class CartolasStockModule { }
