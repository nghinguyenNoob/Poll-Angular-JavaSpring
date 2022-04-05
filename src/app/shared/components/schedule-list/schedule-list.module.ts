import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { MatPaginatorCustomModule } from '../mat-paginator-custom/mat-paginator-custom.module';
import { TableModule } from '../table/table.module';
import { PaginationModule } from '../pagination/pagination.module';
import { ScheduleListComponent } from './schedule-list.component';
import { ScheduleFilterModule } from '../schedule-filter/schedule-filter.module';

@NgModule({
  declarations: [
    ScheduleListComponent
  ],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FlexLayoutModule,
    FormsModule,
    MatPaginatorCustomModule,
    TableModule,
    PaginationModule,
    ScheduleFilterModule
  ],
  exports: [
    ScheduleListComponent
  ]
})
export class ScheduleListModule { }
