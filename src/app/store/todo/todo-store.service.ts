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
        dueDate: new Date('July 1, 2023 01:15:00')
      },
      {
        id:Math.floor(Math.random() * 1000),
        name:'take out trash',
        priority:'not urgent',
        dueDate: new Date('July 21, 2023 01:15:00')
      }
    ])
  }

  setNewTodo(todo:TodoInterface){
    this._todo$.next([...this.todo,todo])
  }

  deleteTodo(todoToDelete:TodoInterface){
   const currentTodoArray =  this._todo$.getValue()
  const DeleteItemArray = currentTodoArray.filter((el)=> el.id !== todoToDelete.id)
    this._todo$.next(DeleteItemArray)
  }
}
