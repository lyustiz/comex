import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    TranslateModule,
    BrowserAnimationsModule,
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
