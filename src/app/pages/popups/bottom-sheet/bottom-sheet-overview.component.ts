import {Component} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-bottom-sheet-overview',
  templateUrl: 'bottom-sheet-overview.component.html',
})
export class BottomSheetOverviewComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewComponent>) {}

  openLink(event: MouseEvent, item: string): void {
    this.bottomSheetRef.dismiss(item);
    event.preventDefault();
  }
}
