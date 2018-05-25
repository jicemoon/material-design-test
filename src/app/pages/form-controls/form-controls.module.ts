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
} from '@angular/material';

import { FormControlsRoutingModule } from './form-controls-routing.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormControlsComponent } from './form-controls.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { InputComponent } from './input/input.component';

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
    FormControlsRoutingModule
  ],
  declarations: [ AutocompleteComponent, FormControlsComponent, CheckboxComponent, DatepickerComponent, InputComponent ]
})
export class FormControlsModule {}
