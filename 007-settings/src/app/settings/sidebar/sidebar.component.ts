import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() settings;
  @Output() changeFilter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filterChange(value, name) {
    const obj = {
      name,
      value
    };
    // this.changeFilter.emit(obj);
    return value;
  }

}
