import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements OnInit {
  @Input('settings') settings;
  @Input('image') image;

  constructor() { }

  ngOnInit() {
  }

  setStyles() {
    let styles = {
      'background-image': `url(${this.image})`
    };
    return styles;
  }

}
