import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatListModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatSelectModule,
  MatCheckboxModule,
} from '@angular/material';

import { PopupsRoutingModule } from './popups-routing.module';
import { PopupsComponent } from './popups.component';
import { BottomSheetOverviewComponent } from './bottom-sheet/bottom-sheet-overview.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    PopupsRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PopupsComponent,
    BottomSheetComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    BottomSheetOverviewComponent,
    SnackBarComponent,
    TooltipComponent,
  ],
  entryComponents: [
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    BottomSheetOverviewComponent,
  ]
})
export class PopupsModule {}
