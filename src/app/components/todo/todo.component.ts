import { Component, Input } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Todo as TodoModel } from 'src/app/models/Todo.model';
import { TodoService } from 'src/app/service/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class Todo{

  @Input() todo : TodoModel; 
  @Input() i: number;

  
  faPen = faPen;
  faTrash = faTrash;

  constructor(private _todoService: TodoService) {
    this.todo = new TodoModel();
    this.i = 0;
  }

  onUpdateTodoEnter(index: number, todo: TodoModel):void{
    this._todoService.update(index, todo);
  }

  onEditTodoClick(todo: TodoModel):void{
    this._todoService.editTodo(todo);
  }

  onDeleteTodoClick(index:number):void{
    this._todoService.deleteTodo(index)
  }

  onTodochecked(todo: TodoModel, index: number):void{
    this._todoService.toggleTodoChecked(index, todo);
  }
}