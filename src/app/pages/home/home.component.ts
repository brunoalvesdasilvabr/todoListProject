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
  products$!:Observable<TodoInterface[]>
  constructor(private todoStore: TodoStoreService){
this.products$ = this.todoStore.todo$
  }
}
