import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollListPageComponent } from './poll-list-page.component';


const routes: Routes = [
  {
    path: '',
    component: PollListPageComponent,
    children: [
      {
        path: '',
        component: PollListPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PollListPageRouter { }
