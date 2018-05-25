import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table.component';
import { PaginatorComponent } from './paginator/paginator.component';

const routes: Routes = [
  {
    path: '',
    component: DataTableComponent,
    children: [
      {
        path: '',
        redirectTo: 'paginator',
        pathMatch: 'full'
      },
      {
        path: 'paginator',
        component: PaginatorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableRoutingModule { }
