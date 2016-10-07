import { Component, OnInit } from '@angular/core';
import { Music } from './music';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  playing: Boolean = false;
  currentMusic: Music;
  musicNum: number;
  $audio: HTMLAudioElement;
  tracks: Music[] = [
    {
      id: 1,
      title: '深海少女',
      artwork: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000ozKnt4SROKF.jpg?max_age=2592000',
      audioSrc: 'http://thirdparty.gtimg.com/C200001aTDok32S3qU.m4a?vkey=B1F5CED06AC066AA848190CD9517B18C3FB44D66CFC0DC4CEF92733828D9AFBDE8B5091325F9562A215684D226E0F34073730753B06914FB&guid=9646701960&fromtag=30',
      duration: '03:34'
    },
    {
      id: 2,
      title: '薔薇のように咲いて 桜のように散って',
      artwork: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000UWpBa2108fE.jpg?max_age=2592000',
      audioSrc: 'http://ws.stream.qqmusic.qq.com/C200001KUmFq4ToqB4.m4a?vkey=B1F5CED06AC066AA848190CD9517B18C3FB44D66CFC0DC4CEF92733828D9AFBDE8B5091325F9562A215684D226E0F34073730753B06914FB&guid=9646701960&fromtag=30',
      duration: '04:22'
    },
    {
      id: 3,
      title: 'DAN DAN 心魅かれてく',
      artwork: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000pKT1D4c6ORv.jpg?max_age=2592000',
      audioSrc: 'http://thirdparty.gtimg.com/C200000BgGHm0K18aU.m4a?vkey=531527658B536A19D810AC91A6886FC0C4BADA3F2734EA77E4EAAAE5CA3D9BA073065D6C911003C081557371B4D80D1C408B96B18D254B78&guid=9646701960&fromtag=30',
      duration: '03:33'
    },
  ];

  ngOnInit() {
    this.$audio = document.querySelector('audio');
    this.musicNum = this.tracks.length;
    this.onSelect(this.tracks[0]);
  }

  setStyles() {
    let styles = {
      'background-image': `url(${this.currentMusic.artwork})`
    };

    return styles;
  }

  play(): void {
    if (this.playing) {
      this.$audio.pause();
    } else {
      this.$audio.play();
    }
    this.playing = !this.playing;
  }

  onSelect(track: Music): void {
    this.currentMusic = track;
    setTimeout(() => {
      this.$audio.play();
      this.playing = true;
    }, 0);
  }

  prev(id: number): void {
    if (id === 1) {
      this.onSelect(this.tracks[this.musicNum - 1]);
    } else {
      this.onSelect(this.tracks[id - 2]);
    }
  }

  next(id: number): void {
    if (id < this.musicNum) {
      this.onSelect(this.tracks[id]);
    } else {
      this.onSelect(this.tracks[0]);
    }
  }
}
