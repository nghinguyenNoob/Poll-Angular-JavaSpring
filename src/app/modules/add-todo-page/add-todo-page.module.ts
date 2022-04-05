import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoPageComponent } from './add-todo-page.component';
import { AddTodoModule } from '../../shared/components/add-todo/add-todo.module';
import { AddTodoPageRouter } from './add-todo-page-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [AddTodoPageComponent],
  imports: [CommonModule ,AddTodoModule, AddTodoPageRouter,MatSnackBarModule],
  exports: [AddTodoPageComponent],
})
export class AddTodoPageModule {}
