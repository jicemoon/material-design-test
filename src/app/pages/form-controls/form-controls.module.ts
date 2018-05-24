import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatAutocompleteModule, MatSlideToggleModule, MatInputModule } from '@angular/material';

import { FormControlsRoutingModule } from './form-controls-routing.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormControlsComponent } from './form-controls.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSlideToggleModule,
    FormControlsRoutingModule
  ],
  declarations: [AutocompleteComponent, FormControlsComponent]
})
export class FormControlsModule { }
