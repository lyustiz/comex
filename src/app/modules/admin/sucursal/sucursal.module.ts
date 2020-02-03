import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { SucursalRoutingModule } from './sucursal-routing.module';
import { SucursalListComponent } from './componets/sucursal-list/sucursal-list.component';
import { SucursalSearchComponent } from './componets/sucursal-search/sucursal-search.component';
import { SucursalCreateComponent } from './componets/sucursal-create/sucursal-create.component';
import { SucursalUpdateComponent } from './componets/sucursal-update/sucursal-update.component';


@NgModule({
  declarations: [SucursalListComponent, SucursalSearchComponent, SucursalCreateComponent, SucursalUpdateComponent],
  imports: [
    SucursalRoutingModule,
    SharedModule
  ],
  entryComponents: [SucursalCreateComponent, SucursalUpdateComponent]
})
export class SucursalModule { }
