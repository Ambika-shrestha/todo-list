import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import { TodoService } from 'src/app/service/todoService';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.html',
  styleUrls: ['./todo-footer.css']
})

export class TodoFooterComponent implements OnInit {
  
  faCheckCircle = faCheckCircle
  faTimesCircle = faTimesCircle

  constructor(private _todoService: TodoService) {}
  ngOnInit(): void { }

  filterTodo(checked :boolean):void{
    this._todoService.filterToDoList(checked)
  }

  allTodoList():void{
   const fullList = this._todoService.getList()
   this._todoService.todoListChange.emit(fullList)
  }
}