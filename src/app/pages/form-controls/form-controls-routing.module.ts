import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormControlsComponent } from './form-controls.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { InputComponent } from '../form-controls/input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

const routes: Routes = [
  {
    path: '',
    component: FormControlsComponent,
    data: {
      breadcrumb: 'Form Controls'
    },
    children: [
      {
        path: '',
        redirectTo: 'autocomplete',
        pathMatch: 'full',
        data: {
          breadcrumb: 'Autocomplete'
        },
      },
      {
        path: 'autocomplete',
        component: AutocompleteComponent,
        data: {
          breadcrumb: 'Autocomplete'
        },
      },
      {
        path: 'checkbox',
        component: CheckboxComponent,
        data: {
          breadcrumb: 'Checkbox'
        },
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
        data: {
          breadcrumb: 'Datepicker'
        },
      },
      {
        path: 'input',
        component: InputComponent,
        data: {
          breadcrumb: 'Input'
        },
      },
      {
        path: 'radioButton',
        component: RadioButtonComponent,
        data: {
          breadcrumb: 'Radio Button'
        },
      },
      {
        path: 'select',
        component: SelectComponent,
        data: {
          breadcrumb: 'Select'
        },
      },
      {
        path: 'slider',
        component: SliderComponent,
        data: {
          breadcrumb: 'Slider'
        },
      },
      {
        path: 'slideToggle',
        component: SlideToggleComponent,
        data: {
          breadcrumb: 'Slide Toggle'
        },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormControlsRoutingModule { }
