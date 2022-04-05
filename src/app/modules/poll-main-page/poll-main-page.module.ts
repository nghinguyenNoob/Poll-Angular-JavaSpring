import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PollMainPageRouter } from './poll-main-page-routing.module';
import { PollMainPageComponent } from './poll-main-page.component';
import { PollMainModule } from '../../shared/components/poll-main/poll-main.module';
@NgModule({
  declarations: [PollMainPageComponent],
  imports: [
     CommonModule, PollMainPageRouter, PollMainModule

  ],
  exports: [PollMainPageComponent]
})
export class PollMainPageModule { }