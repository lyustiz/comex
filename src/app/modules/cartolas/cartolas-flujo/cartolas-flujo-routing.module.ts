import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartolasFlujoListComponent } from './components/cartolas-flujo-list/cartolas-flujo-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: CartolasFlujoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartolasFlujoRoutingModule { }
