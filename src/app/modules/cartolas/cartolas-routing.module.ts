import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCartolasComponent } from './components/list-cartolas/list-cartolas.component';


const routes: Routes = [
  {
    path: '',
    component: ListCartolasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartolasRoutingModule { }
