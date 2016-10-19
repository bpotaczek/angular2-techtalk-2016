import { Component } from '@angular/core';

@Component({
  // what to use to display this component <app-root></app-root>
  selector: 'app-root',
  // url to template
  templateUrl: './app.component.html',
  // styles relevent to this component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
