import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockCobranzaRoutingModule } from './stock-cobranza-routing.module';
import { StockCobranzaPrintComponent } from './components/stock-cobranza-print/stock-cobranza-print.component';
import { StockCobranzaListComponent } from './components/stock-cobranza-list/stock-cobranza-list.component';
import { StockCobranzaSearchComponent } from './components/stock-cobranza-search/stock-cobranza-search.component';


@NgModule({
  declarations: [StockCobranzaPrintComponent, StockCobranzaListComponent, StockCobranzaSearchComponent],
  imports: [
    CommonModule,
    StockCobranzaRoutingModule
  ]
})
export class StockCobranzaModule { }
