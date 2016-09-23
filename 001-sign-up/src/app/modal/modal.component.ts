import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Model } from '../model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => *', [
        style({
          transform: 'translateY(30%)',
          opacity: .01
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateY(30%)',
          opacity: .01
        }))
      ])
    ])
  ]
})

export class ModalComponent implements OnInit {
  show = true;
  models: Model[] = [
    {
      id: 'name',
      type: 'text',
      placeholder: 'Raincal'
    },
    {
      id: 'email',
      type: 'email',
      placeholder: 'cyj94228@gmail.com'
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'password'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.show = false;
  }

}
