import { Routes } from '@angular/router';

import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { NameResolve } from './name.resolve.service';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'routeA', pathMatch: 'full' },
  { path: 'routeA', component: ComponentAComponent },
  {
    path: 'routeB',
    component: ComponentBComponent,
    resolve: {
      name: NameResolve
    }
  },
  { path: 'routeC', component: ComponentCComponent }
];
