import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface } from 'src/app/interfaces/todo/todo.interface';
import { TodoStoreService } from 'src/app/store/todo/todo-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  value!:string
  todos$!:Observable<TodoInterface[]>
  showDialog = false
  constructor(private todoStore: TodoStoreService){
this.todos$ = this.todoStore.todo$
  }

  deleteTodo(todo:TodoInterface){
this.todoStore.deleteTodo(todo)
  }

  // filterTodos(word:string){
  //   return this.todos$.pipe(
  //     filter(item => {
  //     return Object.keys(item).some(key => {
  //       console.log(item)
  //       return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
  //     });
  //   }))
  // }
}
