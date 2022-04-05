import { CommonModule } from '@angular/common';
import {ScheduleDetailModule} from '../../shared/components/schedule-detail/schedule-detail.module';
import { ScheduleDetailPageRouter } from './schedule-detail-page-routing.module';
import { ScheduleDetailPageComponent } from './schedule-detail-page.component';
import { NgModule} from '@angular/core';
import { MaterialCustomModule } from '../../shared/material-custom/material-custom.module';
@NgModule({
  declarations: [ScheduleDetailPageComponent,],
  imports: [
    CommonModule,
    ScheduleDetailModule,
    ScheduleDetailPageRouter,
    MaterialCustomModule

  ],
  exports: [ScheduleDetailPageComponent,],

})
export class ScheduleDetailPageModule { }
