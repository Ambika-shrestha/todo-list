import { Component} from '@angular/core';
import { TodoService } from 'src/app/service/todoService';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})

export class TodoHeaderComponent {

  faPlus = faPlus;

  constructor(private _todoService: TodoService) {
  }

  onAddButtonClick(value: string): void {
    this._todoService.addTodo(value);
  }
}