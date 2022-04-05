import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { MatPaginatorCustomModule } from '../mat-paginator-custom/mat-paginator-custom.module';
import { TableModule } from '../table/table.module';
import { PaginationModule } from '../pagination/pagination.module';
import { EditListExcelComponent } from './edit-list-excel.component';
import { LabelModule } from '../label/label.module';
import { ButtonModule } from '../button/button.module';
import { PopupModule } from '../pop-up/pop-up.module';

@NgModule({
  declarations: [
    EditListExcelComponent
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
    EditListExcelComponent
  ]
})
export class EditListExcelModule { }