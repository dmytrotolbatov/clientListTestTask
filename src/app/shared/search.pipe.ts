import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, input: string) {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el: any) {
        const name: string = el.general.firstName + el.general.lastName;
        return name.toLowerCase().indexOf(input) > -1;
      })
    }
    return value;
  }
}
