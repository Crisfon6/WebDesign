import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown): string {
   if (!value) return '';
   return value.toString().charAt(0).toUpperCase() + value.toString().slice(1);
  }

}
