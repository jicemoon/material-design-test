import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/formControls',
    pathMatch: 'full'
  },
  {
    path: 'formControls',
    loadChildren: './pages/form-controls/form-controls.module#FormControlsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
