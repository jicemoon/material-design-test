import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BtnsComponent } from './btns.component';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
  {
    path: '',
    component: BtnsComponent,
    children: [
      {
        path: '',
        redirectTo: 'button',
        pathMatch: 'full'
      },
      {
        path: 'button',
        component: ButtonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BtnsRoutingModule { }
