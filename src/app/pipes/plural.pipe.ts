import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural',
  standalone: true
})
export class PluralPipe implements PipeTransform {

  transform(value:  number | string, one: string, few: string, many: string): string {
    const num = Number(value)
  
    if (isNaN(num)) {
      return ''
    }

    const abs = Math.abs(num)
    const mod100 = abs % 100
    const mod10 = abs % 10
    if (mod100 > 10 && mod100 < 15) {
      return many;
    } else if (mod10 === 1) {
      return one;
    } else if (mod10 >= 2 && mod10 <= 4) {
      return few;
    }
    return many
      
    


  }

}
