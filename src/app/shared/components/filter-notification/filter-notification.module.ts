import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { FilterNotificationComponent } from './filter-notification.component';
import { SelectComponent } from '../select/select.component';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SelectModule } from '../select/select.module';


@NgModule({
  declarations: [
    ButtonGroupComponent,
    FilterNotificationComponent,
  ],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FormsModule,
    // BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule,
    SelectModule

  ],
  exports: [
    FilterNotificationComponent,
  ],
})
export class FilterNotificationModule {}