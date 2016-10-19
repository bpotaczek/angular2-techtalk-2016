import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColorService } from './color.service';
import { BetterColorService } from './bettercolor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: ColorService, useClass: BetterColorService}],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

{
  provide: ColorService, useClass: ColorService
},
{
  provide: TITLE, useValue: 'My Application Title'
},
{
  provide: OldColorService, useExisting: ColorService
},
{
  provide: WrappingColorService, useFactory: (colorResolver) => {
    return new ColorService(colorResolver.getColor());
  }, deps: [ ColorResolver ]
}

*/