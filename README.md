# Angular2 TechTalk

Slides for the presentation are here. https://slides.com/bradypotaczek/angular2/

To navigate each area you need to checkout the branch `git checkout step1`. I also have listed the main files or code that is targeted for each step.

* step1 - basic application
  * main.ts
  * app.module.ts
  * app.component.*
* step2 - data binding
  * `[(ngModel)]="title"`
  * `(click)="update()"`
* step3 - directives (structural and attribute)
  * `*ngIf`
  * `*ngFor`
* step4 - services
  * color.service.ts
* step5 - providers
  * bettercolor.service.ts
  * `providers: [{provide: ColorService, useClass: BetterColorService}],`
* step6 - routing
  * app.routes.ts
  * component-x/*
* step7 - resolves
  * name.resolve.service.ts
  * `resolve: {
      name: NameResolve
    }`
* step8 - modules
  * module-x/*
* step9 - lazy loading modules
  * app.routes.ts

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

Run `ng serve` to run it. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

