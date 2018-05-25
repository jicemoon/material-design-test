import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtnsRoutingModule } from './btns-routing.module';
import { BtnsComponent } from './btns.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    BtnsRoutingModule
  ],
  declarations: [BtnsComponent, ButtonComponent]
})
export class BtnsModule { }
