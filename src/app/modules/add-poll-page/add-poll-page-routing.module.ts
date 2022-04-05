import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPollPageComponent } from './add-poll-page.component';

const routes: Routes = [
  {
    path: '',
    component: AddPollPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPollPageRouter {}
