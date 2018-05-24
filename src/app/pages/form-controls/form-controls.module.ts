import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlsRoutingModule } from './form-controls-routing.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormControlsComponent } from './form-controls.component';

@NgModule({
  imports: [
    CommonModule,
    FormControlsRoutingModule
  ],
  declarations: [AutocompleteComponent, FormControlsComponent]
})
export class FormControlsModule { }
