import { ListFilterScheduleComponent } from '../list-filter-schedule/list-filter-schedule.component';
import { CommonModule } from '@angular/common';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CheckboxNewComponent } from '../checkbox/checkbox-new/checkbox-new.component';
import { ButtonModule } from '../button/button.module';
import { LabelModule } from '../label/label.module';
import { SelectModule } from '../select/select.module';
import { SearchModule } from '../search/search.module';
import { DateTimePickerModule } from '../date-time-picker/date-time-picker.module';
import { SelectMultipleModule } from '../select-multiple/select-multiple.module';

@NgModule({
  declarations: [ListFilterScheduleComponent, CheckboxNewComponent],
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
    SelectMultipleModule,
  ],
  exports: [ListFilterScheduleComponent],
})
export class FilterModule {}
