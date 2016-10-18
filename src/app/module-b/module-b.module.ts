import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentBComponent } from './component-b.component';
import { AppRoutes } from './module-b.routes';

@NgModule({
  declarations: [
    ComponentBComponent
  ],
  imports: [
    RouterModule.forChild(AppRoutes),
    CommonModule
  ],
  exports: [
    ComponentBComponent
  ]
})
export class ModuleBModule { }
