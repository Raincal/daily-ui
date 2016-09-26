import { Component } from '@angular/core';

import { TitleList } from './title-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleLists: TitleList[] = [
    {
      title: 'Top TV picks for Jack',
      url: 'discover/tv?sort_by=popularity.desc&page=1'
    },
    {
      title: 'Trending now',
      url: 'discover/movie?sort_by=popularity.desc&page=1'
    },
    {
      title: 'Most watched in Horror',
      url: 'genre/27/movies?sort_by=popularity.desc&page=1'
    },
    {
      title: 'Sci-Fi greats',
      url: 'genre/878/movies?sort_by=popularity.desc&page=1'
    },
    {
      title: 'Comedy magic',
      url: 'genre/35/movies?sort_by=popularity.desc&page=1'
    },
  ];
}
