import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupsComponent } from './popups.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [
  {
    path: '',
    component: PopupsComponent,
    data: {
      breadcrumb: 'Popups'
    },
    children: [
      {
        path: '',
        redirectTo: 'bottomSheet',
        pathMatch: 'full'
      },
      {
        path: 'bottomSheet',
        component: BottomSheetComponent,
        data: {
          breadcrumb: 'Bottom Sheet'
        },
      },
      {
        path: 'dialog',
        component: DialogComponent,
        data: {
          breadcrumb: 'Dialog'
        },
      },
      {
        path: 'snackBar',
        component: SnackBarComponent,
        data: {
          breadcrumb: 'Snack Bar'
        },
      },
      {
        path: 'tooltip',
        component: TooltipComponent,
        data: {
          breadcrumb: 'Tooltip'
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupsRoutingModule { }
