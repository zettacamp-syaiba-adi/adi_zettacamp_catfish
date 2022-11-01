import { Pipe, PipeTransform } from '@angular/core';
import { AccentPipe } from './accent.pipe';
import { User } from '../model/user.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 acent = new AccentPipe();
  transform(value: User[], filterString: string): User[] {
    filterString = filterString.toLowerCase();
    filterString = this.acent.transform(filterString);

    return value.filter(user =>{
      let normal = this.acent.transform(user.name);
      normal = normal.toLowerCase();
      normal = normal.replace(/[.\s,]/g, '');
      return normal.includes(filterString);
    });
  } 
}
