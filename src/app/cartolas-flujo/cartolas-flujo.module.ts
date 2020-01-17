import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CartolaFlujoRouteModule } from './cartolas-flujo-route.module';
import { CartolaFlujoComponent } from './components/cartola-flujo/cartola-flujo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CartolaFlujoRouteModule
  ],
  exports: [CartolaFlujoComponent],
  declarations: [CartolaFlujoComponent],
})
export class CartolasFlujoModule { }
