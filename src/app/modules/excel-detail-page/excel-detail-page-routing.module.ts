import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExcelDetailPageComponent } from './excel-detail-page.component';

const routes: Routes = [
  {
    path: 'excel_detail',
    component: ExcelDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcelDetailPageRouter {}
