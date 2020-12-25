import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propname: string) {
    value.sort((a, b) => (a[propname] > b[propname]) ? 1 : -1)
    return value;
  }

}
