import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatButtonModule
} from '@angular/material';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    NavigationRoutingModule
  ],
  declarations: [NavigationComponent, MenuComponent, SidenavComponent]
})
export class NavigationModule {}
