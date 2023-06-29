import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import { TodoInterface } from 'src/app/interfaces/todo/todo.interface';



@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {
private _todo$ = new BehaviorSubject<TodoInterface[]>([])
 todo$ = this._todo$.asObservable()
  constructor() { 
  this.setInitialState()
  }

  get todo(){
    return this._todo$.getValue()
  }

  setInitialState(){
    this._todo$.next([
      {
        id:Math.floor(Math.random() * 1000),
        name:'clean house',
        priority:'urgent',
        dueDate: new Date()
      }
    ])
  }

  setNewTodo(todo:TodoInterface){
    this._todo$.next([...this.todo,todo])
  }
}
