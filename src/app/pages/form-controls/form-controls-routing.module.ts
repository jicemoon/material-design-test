import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormControlsComponent } from './form-controls.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

const routes: Routes = [
  {
    path: '',
    component: FormControlsComponent,
    children: [
      {
        path: '',
        redirectTo: 'autocomplete',
        pathMatch: 'full'
      },
      {
        path: 'autocomplete',
        component: AutocompleteComponent
      },
      {
        path: 'checkbox',
        component: CheckboxComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormControlsRoutingModule { }
