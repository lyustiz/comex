import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GlobalModule } from '../app/global/global.module';
import { SharedModule } from '../app/shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

// project modules
import { CartolasFlujoModule } from './cartolas-flujo/cartolas-flujo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GlobalModule.forRoot(),
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // project modules
    CartolasFlujoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
