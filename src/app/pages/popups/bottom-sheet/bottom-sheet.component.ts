import {Component} from '@angular/core';
import {MatBottomSheet} from '@angular/material';
import { BottomSheetOverviewComponent } from './bottom-sheet-overview.component';

/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: 'bottom-sheet.component.html',
  styleUrls: ['bottom-sheet.component.scss'],
})
export class BottomSheetComponent {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    const bs = this.bottomSheet.open(BottomSheetOverviewComponent);
    bs.afterDismissed().subscribe(data => {
      console.log(data);
    });
  }
}

