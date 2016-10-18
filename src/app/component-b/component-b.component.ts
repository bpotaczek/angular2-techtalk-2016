import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  resolve: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach(data => {
      this.resolve = data['name'];
    });
  }

}
