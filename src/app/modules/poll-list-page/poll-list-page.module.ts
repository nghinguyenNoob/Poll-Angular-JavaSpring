import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollListPageComponent } from './poll-list-page.component';
import { PollListModule } from '../../shared/components/poll-list/poll-list.module';
import { PollListPageRouter } from './poll-list-page-routing.module';
@NgModule({
  declarations: [PollListPageComponent],
  imports: [CommonModule, PollListModule, PollListPageRouter],
  exports: [PollListPageComponent],
})
export class PollListPageModule { }
