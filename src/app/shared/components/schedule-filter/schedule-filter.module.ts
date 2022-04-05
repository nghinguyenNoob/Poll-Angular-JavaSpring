import { CommonModule } from '@angular/common';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { LabelModule } from '../label/label.module';
import { SelectModule } from '../select/select.module';
import { SearchModule } from '../search/search.module';
import { DateTimePickerModule } from '../date-time-picker/date-time-picker.module';
import { ScheduleFilterComponent } from './schedule-filter.component';
import { SelectMultipleModule } from '../select-multiple/select-multiple.module';

@NgModule({
  declarations: [ScheduleFilterComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FlexLayoutModule,
    FormsModule,
    ButtonModule,
    DateTimePickerModule,
    LabelModule,
    SelectModule,
    SearchModule,
    SelectMultipleModule
  ],
  exports: [ScheduleFilterComponent],
})
export class ScheduleFilterModule {}
