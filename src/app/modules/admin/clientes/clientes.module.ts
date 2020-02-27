import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListComponent } from './components/clientes-list/clientes-list.component';
import { ClientesFormComponent } from './components/clientes-form/clientes-form.component';
import { ClientesSearchComponent } from './components/clientes-search/clientes-search.component';



@NgModule({
  declarations: [ClientesListComponent, ClientesFormComponent, ClientesSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClientesRoutingModule,
  ],
  entryComponents: [ClientesFormComponent]
})
export class ClientesModule { }
