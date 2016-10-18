import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  buttonPushed = false;
  colors = ['black', 'red', 'green', 'blue'];
  selectedColor = 'black';

  update() {
    this.buttonPushed = true;
  }
}
