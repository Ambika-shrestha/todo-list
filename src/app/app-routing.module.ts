import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';

const routes: Routes = [
  { path: 'first-component', component: TodoHeaderComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
