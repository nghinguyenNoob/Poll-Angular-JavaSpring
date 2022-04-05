import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailTodoPageComponent } from './detail-todo-page.component';


const routes: Routes = [
  {
    path: ':id',
    component: DetailTodoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTodoPageRouting {}
