import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';
import { PaginatorComponent } from '../data-table/paginator/paginator.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableRoutingModule
  ],
  declarations: [DataTableComponent, PaginatorComponent]
})
export class DataTableModule { }
