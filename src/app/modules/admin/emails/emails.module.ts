import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailsRoutingModule } from './emails-routing.module';
import { EmailsListComponent } from './components/emails-list/emails-list.component';
import { EmailsFormComponent } from './components/emails-form/emails-form.component';
import { EmailsSearchComponent } from './components/emails-search/emails-search.component';
import { EmailsActivateComponent } from './components/emails-activate/emails-activate.component';
import { EmailsCuentasComponent } from './components/emails-cuentas/emails-cuentas.component';


@NgModule({
  declarations: [EmailsListComponent, EmailsFormComponent, EmailsSearchComponent, EmailsActivateComponent, EmailsCuentasComponent],
  imports: [
    CommonModule,
    EmailsRoutingModule
  ]
})
export class EmailsModule { }
