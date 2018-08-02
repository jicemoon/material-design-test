import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    data: {
      breadcrumb: 'Navigation'
    },
    children: [
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      },
      {
        path: 'menu',
        component: MenuComponent,
        data: {
          breadcrumb: 'Menu'
        },
      },
      {
        path: 'sidenav',
        component: SidenavComponent,
        data: {
          breadcrumb: 'Sidenav'
        },
      },
      {
        path: 'toolbar',
        component: ToolbarComponent,
        data: {
          breadcrumb: 'Toolbar'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
