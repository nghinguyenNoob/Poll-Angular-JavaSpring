import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddScheduleModule } from '../../shared/components/add-schedule/add-schedule.module';
import { AddSchedulePageRouter } from './add-schedule-page-routing.module';
import { AddSchedulePageComponent } from './add-schedule-page.component';
@NgModule({
  declarations: [AddSchedulePageComponent],
  imports: [
    CommonModule,AddSchedulePageRouter,AddScheduleModule

  ],
  exports: [AddSchedulePageComponent]
})
export class AddSchedulePageModule { }
