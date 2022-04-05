import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { MatPaginatorCustomModule } from '../mat-paginator-custom/mat-paginator-custom.module';
import { TableModule } from '../table/table.module';
import { PaginationModule } from '../pagination/pagination.module';

import { LabelModule } from '../label/label.module';
import { ButtonModule } from '../button/button.module';
import { PopupModule } from '../pop-up/pop-up.module';
import { AddListExcelComponent } from './add-list-excel.component';

@NgModule({
  declarations: [
    AddListExcelComponent
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
    PopupModule

  ],
  exports: [
    AddListExcelComponent
  ]
})
export class AddListExcelModule { }