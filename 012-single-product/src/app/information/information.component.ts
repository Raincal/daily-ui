import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  product = {
    title: 'Mo Farah Nike Air Zoom Pegasus 33 iD',
    price: '1550 SEK',
    description: `Mo Farah running shoes Nike Air Zoom Pegasus 33 iD combines perfect fit and fast feel with responsive
     cushioning keeps you comfortable for long.<br /><br /> This version honors Gen. historic six gold medals that he had
      taken two at a time in three different championships in the world, with a hälmärke in gold metallic,
      specialty printing and more.`,
  };

  constructor() { }

  ngOnInit() {
  }

}
