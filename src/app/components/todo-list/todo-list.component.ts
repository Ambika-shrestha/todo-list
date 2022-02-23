import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/service/todoService';


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