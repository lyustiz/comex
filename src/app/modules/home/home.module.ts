import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

// Ngxchart
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SimpleWidgetComponent } from './components/simple-widget/simple-widget.component';
import { ComplexWidgetComponent } from './components/complex-widget/complex-widget.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, SimpleWidgetComponent, ComplexWidgetComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    NgxChartsModule
  ]
})
export class HomeModule { }
