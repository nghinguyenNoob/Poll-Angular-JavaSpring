import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExcelListPageComponent } from './excel-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExcelListPageComponent,
    children: [
      {
        path: '',
        component: ExcelListPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcelListPageRouter {}
