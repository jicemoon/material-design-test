import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatInputModule,
  MatRadioModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatSliderModule,
} from '@angular/material';

import { FormControlsRoutingModule } from './form-controls-routing.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormControlsComponent } from './form-controls.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { InputComponent } from './input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    FormControlsRoutingModule
  ],
  declarations: [
    AutocompleteComponent,
    FormControlsComponent,
    CheckboxComponent,
    DatepickerComponent,
    InputComponent,
    RadioButtonComponent,
    SelectComponent,
    SliderComponent,
    SlideToggleComponent
  ]
})
export class FormControlsModule {}
