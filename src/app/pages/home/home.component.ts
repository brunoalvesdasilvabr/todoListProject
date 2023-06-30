import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface } from 'src/app/interfaces/todo/todo.interface';
import { TodoStoreService } from 'src/app/store/todo/todo-store.service';
import { filter } from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  todos$!:Observable<TodoInterface[]>
  showDialog = false
  constructor(private todoStore: TodoStoreService){
this.todos$ = this.todoStore.todo$
  }

  deleteTodo(todo:TodoInterface){
this.todoStore.deleteTodo(todo)
  }

 
}
