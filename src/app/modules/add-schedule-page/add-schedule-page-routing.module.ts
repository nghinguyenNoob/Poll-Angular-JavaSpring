import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSchedulePageComponent } from './add-schedule-page.component';
const routes: Routes = [
  {
    path: '',
    component: AddSchedulePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSchedulePageRouter {}
