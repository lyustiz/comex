import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// Ngxchart
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    NgxChartsModule

  ]
})
export class HomeModule { }
