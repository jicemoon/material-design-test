import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatIconModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule,
} from '@angular/material';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CardComponent } from './card/card.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    FormsModule,
  ],
  declarations: [LayoutComponent, CardComponent, ExpansionPanelComponent]
})
export class LayoutModule { }
