import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  // components, directives and pipes
  declarations: [
    AppComponent
  ],
  // modules whose public classes you need to reference in templates (e.g. ngIf, ngModel)
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // components, directives, and pipes used by other modules that will import this module
  exports: [],
  // services to register with the app for dependency injection
  providers: [],
  // component to bootstrap
  bootstrap: [AppComponent]
})
export class AppModule { }
