import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { DateTimePickerComponent } from './date-time-picker.component';
import { TimePickerModule } from './time-picker/time-picker.module';

@NgModule({
  declarations: [
    DateTimePickerComponent
  ],
  imports: [
    CommonModule,
    MaterialCustomModule,
    TimePickerModule,
    DatePickerModule,
    FormsModule
  ],
  exports: [
    DateTimePickerComponent,
  ]
})
export class DateTimePickerModule { }
