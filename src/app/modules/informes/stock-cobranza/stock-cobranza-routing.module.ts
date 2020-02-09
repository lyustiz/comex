import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockCobranzaListComponent } from './components/stock-cobranza-list/stock-cobranza-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: StockCobranzaListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockCobranzaRoutingModule { }
