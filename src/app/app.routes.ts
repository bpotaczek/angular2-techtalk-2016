import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'routeA', pathMatch: 'prefix' },
  { path: 'routeA', loadChildren: 'app/module-a/module-a.module#ModuleAModule' }
];
