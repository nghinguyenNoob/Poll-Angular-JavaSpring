import { CommonModule } from '@angular/common';

import { NgModule} from '@angular/core';
import { TodoDetailComponent } from '../../shared/components/todo-detail/todo-detail.component';
import { TodoDetailModule } from '../../shared/components/todo-detail/todo-detail.module';
import { DetailTodoPageRouting } from './detail-todo-page-routing';

import { DetailTodoPageComponent } from './detail-todo-page.component';

@NgModule({
  declarations: [DetailTodoPageComponent],
  imports: [
    CommonModule,
    TodoDetailModule,
    DetailTodoPageRouting

  ],
  exports: [DetailTodoPageComponent],

})
export class TodoDetailPageModule { }
