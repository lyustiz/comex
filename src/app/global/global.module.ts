import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgbModule as Bootstrap } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

/** avoid app module full of declarations */
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule,
    Bootstrap
  ],
  declarations: [
  ]
})

export class GlobalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GlobalModule
    };
  }
}