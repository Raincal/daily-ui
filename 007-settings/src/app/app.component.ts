import { Component } from '@angular/core';
import { FILTER_DATA, Data } from './filterData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Data = FILTER_DATA;
}
