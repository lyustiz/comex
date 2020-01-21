import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GlobalModule } from '../app/global/global.module';
import { CoreModule} from './core/core.module';
import { SharedModule } from '../app/shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

// project modules



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // core modules
    GlobalModule.forRoot(),
    CoreModule,
    SharedModule,
    // app
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
