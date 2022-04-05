import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { MatPaginatorCustomModule } from '../mat-paginator-custom/mat-paginator-custom.module';
import { PaginationModule } from '../pagination/pagination.module';
import { ScheduleFilterModule } from '../schedule-filter/schedule-filter.module';
import { TableModule } from '../table/table.module';
import { ExpansionFilterScheduleComponent } from './expansion-filter-schedule.component';



@NgModule({
  declarations: [ExpansionFilterScheduleComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FlexLayoutModule,
    FormsModule,
    ScheduleFilterModule,
  ],
  exports: [ExpansionFilterScheduleComponent]
})
export class ExpansionFilterScheduleModule { }
