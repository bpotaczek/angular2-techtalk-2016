import { Component } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  buttonPushed = false;
  colors: Array<string>;
  selectedColor = 'black';

  constructor(private colorService: ColorService) {}

  update() {
    this.colors = this.colorService.getColors();
    this.buttonPushed = true;
  }
}
