import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentImage: number = 0;
  timer = null;
  backgroundTexts: string[] = [
    `&nbsp;M&nbsp;<sup>O</sup> <sup>F</sup>A<sup>R</sup>AH`,
    `<sup>Z</sup>&nbsp;<sub>O</sub>&nbsp;O<br />&nbsp;M`,
    `PEG<br />ASU`,
    `&nbsp;3<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3`,
    `<sub>S</sub>&nbsp;P<br />R&nbsp;<sub>I</sub>&nbsp;NT`,
    `R&nbsp;<sub>U</sub><br />&nbsp;&nbsp;&nbsp;N`
  ];

  ngOnInit() {
    this.timer = this.autoPlay(5000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  autoPlay(time: number): void {
    setInterval(() => {
      if (this.currentImage < 5) {
        this.currentImage++;
      } else if (this.currentImage = 5) {
        this.currentImage = 0;
      }
    }, time);
  }

  handleClick(i: number): void {
    this.currentImage = i;
  }

}
