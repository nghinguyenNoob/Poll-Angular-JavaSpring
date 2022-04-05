import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';
import { DatePickerModule } from '../date-time-picker/date-picker/date-picker.module';
import { LabelModule } from '../label/label.module';
import { SelectModule } from '../select/select.module';
import { TextareaModule } from '../textarea/textarea.module';
import { AddTodoComponent } from './add-todo.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [AddTodoComponent],
  imports: [
    SharedModule,
    FormsModule,
    ButtonModule,
    DatePickerModule,
    LabelModule,
    SelectModule,
    CommonModule,
    TextareaModule
  ],
  exports: [AddTodoComponent],
})
export class AddTodoModule {}
