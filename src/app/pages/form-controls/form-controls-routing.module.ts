import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormControlsComponent } from './form-controls.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { InputComponent } from '../form-controls/input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

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
      },
      {
        path: 'datepicker',
        component: DatepickerComponent
      },
      {
        path: 'input',
        component: InputComponent
      },
      {
        path: 'radioButton',
        component: RadioButtonComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormControlsRoutingModule { }
