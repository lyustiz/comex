import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// Ngxchart
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MapsComponent } from './components/maps/maps.component';
import { ChartsComponent } from './components/charts/charts.component';
import { SimpleWidgetComponent } from './components/simple-widget/simple-widget.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, MapsComponent, ChartsComponent, SimpleWidgetComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    NgxChartsModule

  ]
})
export class HomeModule { }
