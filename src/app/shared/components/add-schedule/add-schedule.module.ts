import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { TextareaModule } from '../textarea/textarea.module';
import { ButtonModule } from '../button/button.module';
import { DatePickerModule } from '../date-time-picker/date-picker/date-picker.module';
import { TimePickerModule } from '../date-time-picker/time-picker/time-picker.module';
import { LabelModule } from '../label/label.module';
import { SelectModule } from '../select/select.module';
import { SelectMultipleSearchModule } from "../select-multiple-search/select-multiple-search.module";
import { SharedModule } from '../../shared.module';
import { AddScheduleComponent } from "./add-schedule.component";
import { CheckboxModule } from "../checkbox/item/checkbox.module";
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AddScheduleComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ButtonModule,
    LabelModule,
    SelectModule,
    TimePickerModule,
    DatePickerModule,
    TextareaModule,
    CheckboxModule,
    SelectMultipleSearchModule,
  ],
  exports: [AddScheduleComponent],
})
export class AddScheduleModule {}
