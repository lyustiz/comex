import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartolasFlujoRoutingModule } from './cartolas-flujo-routing.module';
import { CartolasFlujoSearchComponent } from './components/cartolas-flujo-search/cartolas-flujo-search.component';
import { CartolasFlujoListComponent } from './components/cartolas-flujo-list/cartolas-flujo-list.component';
import { CartolasFlujoFormComponent } from './components/cartolas-flujo-form/cartolas-flujo-form.component';
import { CartolasFlujoDetailComponent } from './components/cartolas-flujo-detail/cartolas-flujo-detail.component';
import { CartolasFlujoPrintComponent } from './components/cartolas-flujo-print/cartolas-flujo-print.component';
import { CartolasFlujoXlsComponent } from './components/cartolas-flujo-xls/cartolas-flujo-xls.component';
import { CartolasFlujoPdfComponent } from './components/cartolas-flujo-pdf/cartolas-flujo-pdf.component';


@NgModule({
  declarations: [CartolasFlujoSearchComponent, CartolasFlujoListComponent, CartolasFlujoFormComponent, CartolasFlujoDetailComponent, CartolasFlujoPrintComponent, CartolasFlujoXlsComponent, CartolasFlujoPdfComponent],
  imports: [
    CommonModule,
    CartolasFlujoRoutingModule
  ]
})
export class CartolasFlujoModule { }
