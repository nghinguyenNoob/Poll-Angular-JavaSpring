import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTodoListComponent } from './todo-list-page.component';
import { TodoListModule } from '../../shared/components/todo-list/todo-list.module';
import { PageTodoListRouter } from './todo-list-page-routing.module';
@NgModule({
  declarations: [PageTodoListComponent],
  imports: [CommonModule, TodoListModule, PageTodoListRouter],
  exports: [PageTodoListComponent],
})
export class TodoListPageModule {}
