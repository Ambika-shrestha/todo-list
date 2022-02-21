import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/service/todoService';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})

export class TodoListComponent implements OnInit {

  public todolist: Todo[];

  constructor(private _todoService: TodoService) {
    this.todolist = [];
  }

  ngOnInit(): void {
    this.todolist = this._todoService.getList();
    this._todoService.todoListChange.subscribe(todolist => {
      this.todolist = todolist
    })
  }
}