import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  @Input() filters;
  @Input() image: string;

  @Output() changeFilterMode = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  handleClick(id: number) {
    this.changeFilterMode.emit(id);
  }

  setStyles() {
    let styles = {
      'background-image': `url(${this.image})`
    };
    return styles;
  }

}
