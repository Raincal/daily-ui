import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: number, [word, words]: string[]): string {
    if (value > 1) {
      return `${value} ${words}`;
    } else {
      return `${value} ${word}`;
    }
  }

}
