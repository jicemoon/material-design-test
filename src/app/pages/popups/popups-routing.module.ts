import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupsComponent } from './popups.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupsRoutingModule { }
