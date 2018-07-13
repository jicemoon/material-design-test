import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';

import { PopupsRoutingModule } from './popups-routing.module';
import { PopupsComponent } from './popups.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    PopupsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule
  ],
  declarations: [
    PopupsComponent,
    BottomSheetComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
  ],
  entryComponents: [
    DialogComponent,
    DialogOverviewExampleDialogComponent,
  ]
})
export class PopupsModule {}
