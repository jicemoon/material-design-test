import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  MatMenuModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    NavigationRoutingModule
  ],
  declarations: [NavigationComponent, MenuComponent, SidenavComponent, ToolbarComponent]
})
export class NavigationModule {}
