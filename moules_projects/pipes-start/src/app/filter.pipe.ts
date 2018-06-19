import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false   // default value true which will cause this filter to not trigger when element is added to the array, only triggered by changing the filter
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    let resultArr = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArr.push(item);
      }
    }
    return resultArr;
  }

}
