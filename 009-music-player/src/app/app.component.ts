import { Component } from '@angular/core';
import { Music } from './music';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  playing: Boolean = false;
  title: string;
  artist: string;
  artwork: string = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000ozKnt4SROKF.jpg?max_age=2592000';
  audioSrc: string;
  tracks: Music[] = [
    {
      id: 1,
      title: '深海少女',
      artwork: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000ozKnt4SROKF.jpg?max_age=2592000',
      audioSrc: 'http://thirdparty.gtimg.com/C200001aTDok32S3qU.m4a?vkey=B1F5CED06AC066AA848190CD9517B18C3FB44D66CFC0DC4CEF92733828D9AFBDE8B5091325F9562A215684D226E0F34073730753B06914FB&guid=9646701960&fromtag=30',
      duration: '03:34'
    }
  ];

  constructor() {
  }

  setStyles() {
    let styles = {
      'background-image': `url(${this.artwork})`
    };

    return styles;
  }

  handleClick() {
    let $audio = document.querySelector('audio');
    if (this.playing) {
      $audio.pause();
    } else {
      $audio.play();
    }
    this.playing = !this.playing;
  }
}
