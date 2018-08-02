import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule
 } from '@angular/material';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [LayoutComponent, CardComponent]
})
export class LayoutModule { }
