import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatListModule,
  MatSnackBarModule,
} from '@angular/material';

import { PopupsRoutingModule } from './popups-routing.module';
import { PopupsComponent } from './popups.component';
import { BottomSheetOverviewComponent } from './bottom-sheet/bottom-sheet-overview.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@NgModule({
  imports: [
    CommonModule,
    PopupsRoutingModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    FormsModule,
  ],
  declarations: [
    PopupsComponent,
    BottomSheetComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    BottomSheetOverviewComponent,
    SnackBarComponent,
  ],
  entryComponents: [
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    BottomSheetOverviewComponent,
  ]
})
export class PopupsModule {}
