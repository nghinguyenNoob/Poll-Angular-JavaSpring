import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ExcelListPageComponent } from './excel-list-page.component';
import { ExcelListPageRouter } from './excel-list-page-routing.module';
import { ListExcelModule } from 'src/app/shared/components/list-excel/list-excel.module';

@NgModule({
  declarations: [ExcelListPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ExcelListPageRouter,
    ListExcelModule
  ],
  exports: [ExcelListPageComponent],
})
export class ExcelListPageModule {}
