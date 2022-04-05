import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelTemplateDetailPageComponent } from './excel-template-detail-page.component';


const routes: Routes = [
  {
    path: '',
    component: ExcelTemplateDetailPageComponent,
    children: [
      {
        path: '',
        component: ExcelTemplateDetailPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ExcelTemplateDetailPageRouter { }
