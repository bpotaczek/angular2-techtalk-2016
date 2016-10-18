import { Component } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private colorService: ColorService) {}

}
