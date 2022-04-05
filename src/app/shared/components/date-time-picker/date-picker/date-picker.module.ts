import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FormsModule
  ],
  exports: [DatePickerComponent]
})
export class DatePickerModule { }
