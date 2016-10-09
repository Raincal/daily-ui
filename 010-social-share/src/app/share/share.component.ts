import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  shares = [
    {
      type: 'twitter',
      icon: 'fa-twitter',
      color: '#4db6e3',
      content: '1.2k tweet'
    },
    {
      type: 'facebook',
      icon: 'fa-facebook',
      color: '#3664a2',
      content: '1.8k Likes'
    },
    {
      type: 'google+',
      icon: 'fa-google-plus',
      color: '#dc4e41',
      content: '265+'
    },
    {
      type: 'pinterest',
      icon: 'fa-pinterest-p',
      color: '#cc2127',
      content: '97 Pin'
    },
    {
      type: 'more',
      icon: 'fa-ellipsis-h',
      color: '#424e56',
      content: 'More'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
