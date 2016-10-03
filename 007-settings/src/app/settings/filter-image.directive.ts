import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appFilterImage]'
})
export class FilterImageDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  @Input() set appFilterImage(settings) {
    this.setFilterImage(settings);
  }

  setFilterImage(settings) {
    if (settings !== []) {
      let filterString = '';
      settings.map((filter, i) => {
        if (filter.name === 'hue') {
          filterString += `hue-rotate(${filter.value}deg)`;
        } else {
          filterString += `${filter.name}(${filter.value}%)`;
        }

        return filterString;
      });

      this.renderer.setElementStyle(this.el.nativeElement, 'filter', filterString);
    }
  }
}
