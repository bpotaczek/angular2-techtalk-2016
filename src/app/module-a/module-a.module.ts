import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentAComponent } from './component-a.component';
import { AppRoutes } from './module-a.routes';

@NgModule({
  declarations: [
    ComponentAComponent
  ],
  imports: [
    RouterModule.forChild(AppRoutes),
    CommonModule
  ],
  exports: [
    ComponentAComponent
  ]
})
export class ModuleAModule { }
