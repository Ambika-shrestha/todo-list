import { Component} from '@angular/core';
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import { TodoService } from 'src/app/service/todoService';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})

export class TodoFooter{
  
  faCheckCircle = faCheckCircle
  faTimesCircle = faTimesCircle

  constructor(private _todoService: TodoService) {}

  filterTodo(checked :boolean):void{
    this._todoService.filterToDoList(checked)
  }

  allTodoList():void{
   const fullList = this._todoService.getList()
   this._todoService.todoListChange.emit(fullList)
  }
}