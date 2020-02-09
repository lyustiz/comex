import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformesComponent } from './components/informes/informes.component';

const routes: Routes = [
  {
    path: '',
    component: InformesComponent
  },
  {
    path: 'cuadre-flujo',
    loadChildren: () => import('@module/informes/cuadre-flujo/cuadre-flujo.module').then( m => m.CuadreFlujoModule)
  },
  {
    path: 'stock-cobranza',
    loadChildren: () => import('@module/informes/stock-cobranza/stock-cobranza.module').then( m => m.StockCobranzaModule)
  },
  {
    path: 'stock-colocaciones',
    loadChildren: () => import('@module/informes/stock-colocaciones/stock-colocaciones.module').then( m => m.StockColocacionesModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformesRoutingModule { }
