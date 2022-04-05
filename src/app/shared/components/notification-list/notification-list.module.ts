import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';

import { ButtonModule } from '../button/button.module';
import { FilterNotificationModule } from '../filter-notification/filter-notification.module';
import { PaginationModule } from '../pagination/pagination.module';
import { SearchModule } from '../search/search.module';
import { TableComponent } from '../table/table.component';
import { TableModule } from '../table/table.module';
import { NotificationListComponent } from './notification-list.component';

@NgModule({
  declarations: [
    NotificationListComponent,
  ],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FormsModule,
    FlexLayoutModule,
    FilterNotificationModule,
    ButtonModule,
    SearchModule,
    PaginationModule,
    TableModule
  ],
  exports: [NotificationListComponent ]
})
export class NotificationListModule {}