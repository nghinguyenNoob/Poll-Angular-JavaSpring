import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollDetailPageComponent } from './poll-detail-page.component';
const routes: Routes = [
  {
    path: ':pollId/:optionId',
    component: PollDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollDetailPageRouter {}