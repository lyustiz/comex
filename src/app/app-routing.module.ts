import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

import { AuthGuard } from '@core/guard/auth.guard';

import { LayoutComponent } from '@shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('@module/home/home.module').then( m => m.HomeModule ),
        canActivate: [AuthGuard]
      },
      {
        path: 'cartolas',
        loadChildren: () => import('@module/cartolas/cartolas.module').then( m => m.CartolasModule )
      },
      {
        path: 'admin',
        loadChildren: () => import('@module/admin/admin.module').then( m => m.AdminModule )
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('@module/auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: '**',
    loadChildren: () => import('@module/not-found/not-found.module').then( m => m.NotFoundModule )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash : environment.production ? false : true }),

  ],
  exports: [
    RouterModule
  ]
})

/*
https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7
https://github.com/mathisGarberg/angular-folder-structure/blob/master/src/app/app-routing.module.ts
https://github.com/glats/angular-workshop/blob/master/src/app/app-routing.module.ts
*/
export class AppRoutingModule {
 }
