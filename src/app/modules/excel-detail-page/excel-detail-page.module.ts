import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ExcelDetailPageRouter } from './excel-detail-page-routing.module';
import { ListDetailExcelModule } from 'src/app/shared/components/list-detail-excel/list-detail-excel.module';
import { ExcelDetailPageComponent } from './excel-detail-page.component';


@NgModule({
  declarations: [ExcelDetailPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ExcelDetailPageRouter,
    ListDetailExcelModule
  ],
  exports: [ExcelDetailPageComponent],
})
export class ExcelDetailPageModule {}
