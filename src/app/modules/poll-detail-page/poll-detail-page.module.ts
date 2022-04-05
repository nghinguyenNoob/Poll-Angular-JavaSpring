import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PollDetailPageRouter } from './poll-detail-page-routing.module';
import { PollDetailPageComponent } from './poll-detail-page.component';
import { PollDetailModule } from '../../shared/components/poll-detail/poll-detail.module';
@NgModule({
  declarations: [
    PollDetailPageComponent],
  imports: [
    CommonModule,
    PollDetailPageRouter,
    PollDetailModule,
  ],
  exports: [PollDetailPageComponent]
})
export class PollDetailPageModule { }