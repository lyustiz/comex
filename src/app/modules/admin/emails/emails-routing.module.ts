import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EmailsListComponent } from './components/emails-list/emails-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: EmailsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailsRoutingModule { }
