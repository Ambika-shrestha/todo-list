import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})



export class TodoHeaderComponent implements OnInit {

  todolist: Todo[] = [];
  todo: Todo = new Todo;
  todoinput: string = "";
  completed: boolean = false;
  edit: boolean = false;
  edittodoinput: string = "";
  gettodoList: any;
  newItem: string = "";
  faPlus = faPlus
  faPen = faPen
  faTrash = faTrash


  constructor() {
   
  }
  ngOnInit(): void {
    this.getList()
  }

  onKey(event: any) {
    const inputValue = event.target.value;
    console.log("value", inputValue)
  }

  addTodo() {
    this.todolist.push({
      description: this.todoinput,
      completed: this.completed,
      editMode: this.edit,
    });
    localStorage.setItem("localData", JSON.stringify(this.todolist));
    this.todoinput = '';
  }

  deleteTodo(id: any) {
    this.todolist = this.todolist.filter((v, i) => i !== id);
    localStorage.setItem("localData", JSON.stringify(this.todolist));
  }

  editTodo(index: any, todo: any) {
    todo.editMode = true
  }

  update(index: any, todo: any) {
    let localData = JSON.parse(localStorage['localData']);
    for (let i = 0; i < localData.length; i++) {
      if (todo.description === localData[i].description) {
        localData[i].description = todo.description;
        console.log("hello", localData[i].description)
        break;
      }
    }
    todo.editMode = false
    const l = localStorage.setItem("localData", JSON.stringify(this.todolist));

  }

  getList() {
    this.todolist = JSON.parse(localStorage.getItem('localData') || '{}');
  }

}