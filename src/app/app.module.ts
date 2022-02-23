import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoHeader } from './components/todo-header/todo-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 
import { TodoList } from './components/todo-list/todo-list.component';
import { Todo } from './components/todo/todo.component';
import { TodoService } from './service/todoService';
import { TodoFooter } from './components/todo-footer/todo-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoHeader,
    TodoList,
    Todo,
    TodoFooter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
