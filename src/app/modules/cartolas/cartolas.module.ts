import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';

import { CartolasRoutingModule } from './cartolas-routing.module';
import { ListCartolasComponent } from './components/list-cartolas/list-cartolas.component';
import { SearchCartolasComponent } from './components/search-cartolas/search-cartolas.component';


@NgModule({
  declarations: [ListCartolasComponent, SearchCartolasComponent],
  imports: [
    CommonModule,
    SharedModule,
    CartolasRoutingModule,
  ],
  entryComponents: [SearchCartolasComponent],
})
export class CartolasModule { }
