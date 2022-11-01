import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accent'
})
export class AccentPipe implements PipeTransform {

  transform(value: string): string {
    let char:string[] = value.split('');
    char = char.map(chars => {
      const norm = chars.normalize('NFD').split('');
      return norm[0];
    })
    return char.join('');
  }

}
