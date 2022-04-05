import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollMainPageComponent } from './poll-main-page.component';
const routes: Routes = [
  {
    path: ':id',
    component: PollMainPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollMainPageRouter {}