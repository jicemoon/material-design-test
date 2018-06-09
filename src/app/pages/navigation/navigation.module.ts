import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule, MatIconModule } from '@angular/material';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    NavigationRoutingModule
  ],
  declarations: [NavigationComponent, MenuComponent]
})
export class NavigationModule { }
