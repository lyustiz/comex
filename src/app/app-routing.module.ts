import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment  } from '@env/environment';
import {AuthModule } from '@module/auth/auth.module';

import { LoginComponent  } from '@module/auth/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('@module/auth/auth.module').then( m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : environment.production ? false : true }), AuthModule],
  exports: [RouterModule]
})

/*
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : environment.production ? false : true })],
  exports: [RouterModule]
})
https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7
https://github.com/mathisGarberg/angular-folder-structure/blob/master/src/app/app-routing.module.ts
https://github.com/glats/angular-workshop/blob/master/src/app/app-routing.module.ts
*/
export class AppRoutingModule { }
