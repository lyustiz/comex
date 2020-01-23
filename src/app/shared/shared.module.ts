import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

import { ContentComponent } from '@shared/components/content/content.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavBarComponent } from '@shared/components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    CommonModule
  ],
  declarations: [
    ContentComponent,
    FooterComponent,
    NavBarComponent
  ],
})

export class SharedModule { }
