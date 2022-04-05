import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { MatPaginatorCustomModule } from '../mat-paginator-custom/mat-paginator-custom.module';
import { TableModule } from '../table/table.module';
import { PaginationModule } from '../pagination/pagination.module';
import { PollListComponent } from './poll-list.component';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [
    PollListComponent
  ],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FlexLayoutModule,
    FormsModule,
    MatPaginatorCustomModule,
    TableModule,
    PaginationModule,
    SearchModule
  ],
  exports: [
    PollListComponent
  ]
})
export class PollListModule { }
