import { Component, OnInit } from '@angular/core';

import { IButton } from '../ibutton';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  buttons: IButton[] = [
    {
      primary: true,
      text: 'Watch now'
    },
    {
      primary: false,
      text: '+ My list'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
