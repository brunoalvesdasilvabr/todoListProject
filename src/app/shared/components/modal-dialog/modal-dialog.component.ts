import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoInterface } from 'src/app/interfaces/todo/todo.interface';
import { TodoStoreService } from 'src/app/store/todo/todo-store.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent {
@Input() showDialog!:boolean
today =new Date()

date = {today:this.today}

createTodoForm = this.fb.group({
  name:['',[Validators.required]],
  priority:['',[Validators.required]],
  dueDate: [ new Date(),[Validators.required]]

});
constructor(private fb: FormBuilder,private todoStore:TodoStoreService){}

addTodo(){
  console.log(this.createTodoForm.value)

  if(!this.createTodoForm.valid){
    return
  }

  const newTodo:TodoInterface = {...this.createTodoForm.value,id:this.generateId()} as TodoInterface
  this.todoStore.setNewTodo(newTodo)
this.showDialog = false
this.createTodoForm.reset()
}



private generateId(){
  return Math.floor(Math.random() * 1000)
}
}
