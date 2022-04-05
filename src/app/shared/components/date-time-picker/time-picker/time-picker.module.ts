import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './time-picker.component';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TimePickerComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FormsModule
  ],
  exports: [TimePickerComponent]
})
export class TimePickerModule { }
