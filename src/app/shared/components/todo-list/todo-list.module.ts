import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { TableComponent } from '../table/table.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { TodoListComponent } from './todo-list.component';
import { FilterModule } from '../list-filter-schedule/list-filter-schedule.module';
import { ListFilterScheduleComponent } from '../list-filter-schedule/list-filter-schedule.component';
import { MatPaginatorCustomModule } from '../mat-paginator-custom/mat-paginator-custom.module';
import { TableModule } from '../table/table.module';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    MaterialCustomModule,
    // BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    FilterModule,
    MatPaginatorCustomModule,
    TableModule,
    PaginationModule
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoListModule { }
