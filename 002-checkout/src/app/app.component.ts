import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { State } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('overlay', [
      state('in', style({
        opacity: .2
      })),
      transition('void => *', [
        style({
          opacity: .01
        }),
        animate(300)
      ])
    ]),
    trigger('container', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: .01
        }),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  state: State = {
    active: false,
    people: 1,
    price: 320.00,
    tax: 20,
    duration: 5,
    discount: 5
  };

  ngOnInit() {
    this.state.active = true;
  }
}
