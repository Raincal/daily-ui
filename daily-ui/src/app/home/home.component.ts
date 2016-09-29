import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Angular2 Daily UI';

  constructor() { }

  ngOnInit() {
  }

}
