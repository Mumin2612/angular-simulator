import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {

  transform(value: string, mode: 'compact' | 'international' | 'national' | 'masked' = 'international'): string {
    if (!value) return '';
    const cleanPhone = value.replace(/\D/g, '');
    const country = cleanPhone.slice(0, 2)
    const operator = cleanPhone.slice(2, 5)
    const part1 = cleanPhone.slice(5, 8)
    const part2 = cleanPhone.slice(9, 10)
    const part3 = cleanPhone.slice(10, 12)

    switch (mode) {
      case 'compact':
        return `+${cleanPhone}`;

      case 'international':
        return `+${country} ${operator} ${part1} ${part2} ${part3}`;

      case 'national':
        return `${operator} ${part1} ${part2} ${part3}`;

      case 'masked':
        return `+${country} ${operator} *** ** ${part3}`;

      default:
        return `+${country} ${operator} ${part1} ${part2} ${part3}`;
    }

  }

}
