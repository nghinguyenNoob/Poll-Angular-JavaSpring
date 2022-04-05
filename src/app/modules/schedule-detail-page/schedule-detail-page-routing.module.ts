import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleDetailPageComponent } from './schedule-detail-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: ScheduleDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleDetailPageRouter {}
