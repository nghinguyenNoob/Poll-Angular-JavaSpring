import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleListPageComponent } from './schedule-list-page.component';
import { ScheduleListModule } from '../../shared/components/schedule-list/schedule-list.module';
import { ScheduleListPageRouter } from './schedule-list-page-routing.module';
@NgModule({
  declarations: [ScheduleListPageComponent],
  imports: [CommonModule, ScheduleListModule, ScheduleListPageRouter],
  exports: [ScheduleListPageComponent],
})
export class ScheduleListPageModule { }
