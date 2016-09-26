import { Component, OnInit, Input } from '@angular/core';

import { IButton } from '../ibutton';

@Component({
  selector: 'app-hero-button',
  template: `
    <a href="#" class="Button" attr.data-primary="{{button.primary}}">{{button.text}}</a>
  `,
  styleUrls: ['./hero-button.component.css']
})
export class HeroButtonComponent implements OnInit {
  @Input('button') button: IButton;

  constructor() { }

  ngOnInit() {
  }

}
