import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

// Shared Componets
import { ContentComponent } from '@shared/components/content/content.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavBarComponent } from '@shared/components/nav-bar/nav-bar.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    ContentComponent,
    FooterComponent,
    NavBarComponent,
    ReactiveFormsModule
  ],
  declarations: [
    ContentComponent,
    FooterComponent,
    NavBarComponent
  ],
})

export class SharedModule { }
