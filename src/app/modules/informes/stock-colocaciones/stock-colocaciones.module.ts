import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockColocacionesRoutingModule } from './stock-colocaciones-routing.module';
import { StockColocacionesSearchComponent } from './components/stock-colocaciones-search/stock-colocaciones-search.component';
import { StockColocacionesListComponent } from './components/stock-colocaciones-list/stock-colocaciones-list.component';
import { StockColocacionesPrintComponent } from './components/stock-colocaciones-print/stock-colocaciones-print.component';


@NgModule({
  declarations: [StockColocacionesSearchComponent, StockColocacionesListComponent, StockColocacionesPrintComponent],
  imports: [
    CommonModule,
    StockColocacionesRoutingModule
  ]
})
export class StockColocacionesModule { }
