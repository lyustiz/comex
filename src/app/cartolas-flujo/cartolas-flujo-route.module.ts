import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartolaFlujoComponent } from './components/cartola-flujo/cartola-flujo.component';

const routes: Routes = [
  { path: 'cartola-flujo', component: CartolaFlujoComponent, data: { current: 'cartola' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CartolaFlujoRouteModule { }
