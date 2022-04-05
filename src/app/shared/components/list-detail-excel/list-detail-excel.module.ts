import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { MatPaginatorCustomModule } from '../mat-paginator-custom/mat-paginator-custom.module';
import { TableModule } from '../table/table.module';
import { PaginationModule } from '../pagination/pagination.module';
import { ListDetailExcelComponent } from './list-detail-excel.component';
import { ScheduleFilterModule } from '../schedule-filter/schedule-filter.module';
import { LabelModule } from '../label/label.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    ListDetailExcelComponent
  ],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FlexLayoutModule,
    FormsModule,
    MatPaginatorCustomModule,
    TableModule,
    PaginationModule,
    LabelModule,
    ButtonModule,
    TableModule
  ],
  exports: [
    ListDetailExcelComponent
  ]
})
export class ListDetailExcelModule { }