import { NgModule } from '@angular/core';

import { GlobalModule } from '@global/global.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { environment } from '@env/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    console.log(GlobalModule,
    
    SharedModule);
  }
 }
