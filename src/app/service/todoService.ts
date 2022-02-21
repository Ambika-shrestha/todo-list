import { EventEmitter, Injectable } from '@angular/core';
import { Todo } from '../models/Todo'


//Decorator that marks a class as available to be provided and injected as a dependency.
@Injectable({
  providedIn: 'root',
})


export class TodoService {

  private todolist: Todo[] = [];
  private filteredtodolist: Todo[] = [];
  private completed: boolean = false;
  private edit: boolean = false;
  private checked: boolean = false;
  public todoListChange: EventEmitter<any> = new EventEmitter()

  getList(): Todo[] {
    this.todolist = JSON.parse(localStorage.getItem('localData') || '{}');
    return this.todolist
  }

  addTodo(value: string): void {
    this.todolist.push({
      description: value,
      completed: this.completed,
      editMode: this.edit,
      checked: this.checked
    });
    localStorage.setItem("localData", JSON.stringify(this.todolist));
    this.todoListChange.emit(this.todolist)
  }

  deleteTodo(index: number): void {
    this.todolist = this.todolist.filter((v, i) => i !== index);
    localStorage.setItem("localData", JSON.stringify(this.todolist));
    this.todoListChange.emit(this.todolist)
  }

  editTodos(todo: Todo): void {
    todo.editMode = true
  }

  update(index: number, todo: Todo): void {
    let localData = JSON.parse(localStorage['localData']);
    for (let i = 0; i < localData.length; i++) {
      if (localData[index].description === todo.description ||
        localData[index].checked === todo.checked) {
          localData[index].description = todo.description;
          localData[index].checked = todo.checked;
      }
    }
    todo.editMode = false
    localStorage.setItem("localData", JSON.stringify(localData));
  }

  toggleTodoChecked(index: number, todo: Todo): void {
    todo.checked = !todo.checked
    this.update(index, todo)
  }

  filterToDoList(checked: boolean): void {
    this.filteredtodolist = this.todolist.filter(
      list => list.checked === checked);
    this.todoListChange.emit(this.filteredtodolist)
  }
}

