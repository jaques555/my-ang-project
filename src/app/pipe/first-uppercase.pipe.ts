import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUppercase'
})
export class FirstUppercasePipe implements PipeTransform {

  transform(value: any, position:number): any {

    return value.substring(0,position).toUpperCase()+value.substring(position,value.lentgh).toLowerCase();
  }

}
