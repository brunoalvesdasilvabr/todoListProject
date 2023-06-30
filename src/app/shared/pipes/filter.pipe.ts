import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(todos: any[], searchText: string): any[] {
    if (!todos) return [];
    if (!searchText) return todos;
 
    return todos.filter(todo => {
      return Object.keys(todo).some(key => {
        return String(todo[key]).toLowerCase().includes(searchText.toLowerCase());
      });
    });
   }
}
