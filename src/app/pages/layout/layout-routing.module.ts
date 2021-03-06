import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CardComponent } from './card/card.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      breadcrumb: 'Layout'
    },
    children: [
      {
        path: '',
        redirectTo: 'card',
        pathMatch: 'full'
      },
      {
        path: 'card',
        component: CardComponent,
        data: {
          breadcrumb: 'Card'
        }
      },
      {
        path: 'expansionPanel',
        component: ExpansionPanelComponent,
        data: {
          breadcrumb: 'Expansion Panel'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
