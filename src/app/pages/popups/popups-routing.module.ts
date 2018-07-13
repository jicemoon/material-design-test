import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupsComponent } from './popups.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  {
    path: '',
    component: PopupsComponent,
    children: [
      {
        path: '',
        redirectTo: 'bottomSheet',
        pathMatch: 'full'
      },
      {
        path: 'bottomSheet',
        component: BottomSheetComponent
      },
      {
        path: 'dialog',
        component: DialogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupsRoutingModule { }
