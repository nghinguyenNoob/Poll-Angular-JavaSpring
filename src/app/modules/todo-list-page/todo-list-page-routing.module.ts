import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTodoListComponent } from './todo-list-page.component';


const routes: Routes = [
  {
    path: '',
    component: PageTodoListComponent,
    children: [
      {
        path: '',
        component: PageTodoListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageTodoListRouter {}
