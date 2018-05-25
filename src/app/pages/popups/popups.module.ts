import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupsRoutingModule } from './popups-routing.module';
import { PopupsComponent } from './popups.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    PopupsRoutingModule
  ],
  declarations: [PopupsComponent, BottomSheetComponent]
})
export class PopupsModule { }
