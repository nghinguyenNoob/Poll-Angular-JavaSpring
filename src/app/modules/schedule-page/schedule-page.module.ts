import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CalendarModule } from './../../shared/components/calendar/calendar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulePageRoutingModule } from './schedule-page-routing.module';
import { SchedulePageComponent } from './schedule-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ExpansionFilterScheduleModule } from './../../shared/components/expansion-filter-schedule/expansion-filter-schedule.module';
@NgModule({
  declarations: [SchedulePageComponent],
  imports: [
    CommonModule,
    SchedulePageRoutingModule,
    CalendarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    NgScrollbarModule,
    MatCheckboxModule,
    MatTooltipModule,
    ExpansionFilterScheduleModule,
  ],
  providers: [
    {
      provide: MatSnackBarRef,
      useValue: {},
    },
  ],
})
export class SchedulePageModule {}
