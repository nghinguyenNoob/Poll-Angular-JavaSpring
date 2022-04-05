import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelTemplateDetailPageComponent } from './excel-template-detail-page.component';
import { ScheduleListModule } from '../../shared/components/schedule-list/schedule-list.module';
import { ExcelTemplateDetailPageRouter } from './excel-template-detail-page-routing.module';
import { ListDetailExcelModule } from 'src/app/shared/components/list-detail-excel/list-detail-excel.module';
@NgModule({
  declarations: [ExcelTemplateDetailPageComponent],
  imports: [CommonModule, 
    ListDetailExcelModule,
    ExcelTemplateDetailPageRouter
  ],
  exports: [ExcelTemplateDetailPageComponent],
})
export class ExcelTemplateDetailPageModule { }
