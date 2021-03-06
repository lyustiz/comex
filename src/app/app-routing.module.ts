import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment  } from '../environments/environment';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : environment.production ? false : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
