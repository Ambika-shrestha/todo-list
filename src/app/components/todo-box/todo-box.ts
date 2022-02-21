import { Component, OnInit, Input } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/service/todoService';


@Component({
  selector: 'app-todo-box',
  templateUrl: './todo-box.html',
  styleUrls: ['./todo-box.css']
})

export class TodoBoxComponent implements OnInit {

  @Input() todo : Todo 
  @Input() i: number;

  
  faPen = faPen
  faTrash = faTrash

  constructor(private _todoService: TodoService) {
    this.todo = Todo as any
    this.i = 0
  }
  
  ngOnInit(): void {
  }  

  update(id: number, todo: Todo):void{
    this._todoService.update(id, todo);
  }

  editTodo(todo: Todo):void{
    this._todoService.editTodos(todo);
  }

  deleteTodo(id:number):void{
    this._todoService.deleteTodo(id)
  }

  todochecked(todo: Todo, id: number):void{
    this._todoService.toggleTodoChecked(id, todo);
  }
}