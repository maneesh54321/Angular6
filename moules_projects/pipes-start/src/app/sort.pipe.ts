import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:false
})
export class SortPipe implements PipeTransform {

  transform(value: any, sortingField?: string): any {
    return value.sort((a,b)=>{
      if(a[sortingField]>b[sortingField]){
        return 1;
      }else{
        return -1;
      }
    });
  }

}
