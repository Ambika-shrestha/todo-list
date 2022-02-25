import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo.model';
import { TodoService } from 'src/app/service/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoList implements OnInit {

  public todolist: Todo[];

  constructor(private _todoService: TodoService) {
    this.todolist = this._todoService.getList();
  }

  ngOnInit(): void {
    this._todoService.todoListChange.subscribe( (todolist: Todo[]) => {
      this.todolist = todolist;
    });
  }
}