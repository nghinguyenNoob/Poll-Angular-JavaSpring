import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoPageComponent } from './add-todo-page.component';

const routes: Routes = [
  {
    path: '',
    component: AddTodoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTodoPageRouter {}
