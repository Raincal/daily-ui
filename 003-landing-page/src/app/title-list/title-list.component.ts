import { Component, OnInit, Input } from '@angular/core';

import { TitleList } from '../title-list';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css'],
  providers: [GetDataService]
})
export class TitleListComponent implements OnInit {
  @Input('titleList') titleList: TitleList;
  private apiKey: string = '87dfa1c669eea853da609d4968d294be';
  private requestUrl: string;
  private backgroundImage: string;
  private toggled: boolean = false;
  items = [];

  constructor(private getDataService: GetDataService) {
  }

  ngOnInit() {
    this.requestUrl = `https://api.themoviedb.org/3/${this.titleList.url}&api_key=${this.apiKey}`;
    this.getDataService.getTitleList(this.requestUrl)
      .subscribe(results => this.items = results);
  }

  setStyles(src: string): Object {
    this.backgroundImage = `http://image.tmdb.org/t/p/original${src}`;

    let styles = {
      'background-image': `url(${this.backgroundImage})`
    };

    return styles;
  }

  onClick(): void {
    this.toggled = !this.toggled;
  }

}
