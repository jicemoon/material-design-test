import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/formControls/autocomplete',
    pathMatch: 'full'
  },
  {
    path: 'formControls',
    loadChildren: './pages/form-controls/form-controls.module#FormControlsModule'
  },
  {
    path: 'navigation',
    loadChildren: './pages/navigation/navigation.module#NavigationModule'
  },
  {
    path: 'layout',
    loadChildren: './pages/layout/layout.module#LayoutModule'
  },
  {
    path: 'btns',
    loadChildren: './pages/btns/btns.module#BtnsModule'
  },
  {
    path: 'popups',
    loadChildren: './pages/popups/popups.module#PopupsModule'
  },
  {
    path: 'dataTable',
    loadChildren: './pages/data-table/data-table.module#DataTableModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
