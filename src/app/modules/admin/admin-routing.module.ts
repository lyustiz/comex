import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from '@module/admin/components/admin-home/admin-home.component';


const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
  },
  {
    path: 'cargos',
    loadChildren: () => import('@module/admin/cargos/cargos.module').then( m => m.CargosModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('@module/admin/clientes/clientes.module').then( m => m.ClientesModule)
  },
  {
    path: 'cobranzas',
    loadChildren: () => import('@module/admin/cobranzas/cobranzas.module').then( m => m.CobranzasModule)
  },
  {
    path: 'colocaciones',
    loadChildren: () => import('@module/admin/colocaciones/colocaciones.module').then( m => m.ColocacionesModule)
  },
  {
    path: 'ejecutivos',
    loadChildren: () => import('@module/admin/ejecutivos/ejecutivos.module').then( m => m.EjecutivosModule)
  },
  {
    path: 'emails',
    loadChildren: () => import('@module/admin/emails/emails.module').then( m => m.EmailsModule)
  },
  {
    path: 'flujos',
    loadChildren: () => import('@module/admin/flujos/flujos.module').then( m => m.FlujosModule)
  },
  {
    path: 'interfaces',
    loadChildren: () => import('@module/admin/interfaces/interfaces.module').then( m => m.InterfacesModule)
  },
  {
    path: 'parametros',
    loadChildren: () => import('@module/admin/parametros/parametros.module').then( m => m.ParametrosModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('@module/admin/servicios/servicios.module').then( m => m.ServiciosModule)
  },
  {
    path: 'sucursales',
    loadChildren: () => import('@module/admin/sucursales/sucursales.module').then( m => m.SucursalesModule)
  },
  {
    path: 'sucursal', // testing
    loadChildren: () => import('@module/admin/sucursal/sucursal.module').then( m => m.SucursalModule)
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
