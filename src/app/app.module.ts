import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ColorService } from './color.service';
import { NameResolve } from './name.resolve.service';
import { AppRoutes } from './app.routes';
import { ModuleAModule } from './module-a';
import { ModuleBModule } from './module-b';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuleAModule,
    ModuleBModule
  ],
  providers: [ColorService, NameResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
