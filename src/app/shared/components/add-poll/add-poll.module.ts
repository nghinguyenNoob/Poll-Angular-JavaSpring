import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { ButtonModule } from '../button/button.module';
import { DateTimePickerModule } from '../date-time-picker/date-time-picker.module';
import { LabelModule } from '../label/label.module';
import { SearchModule } from '../search/search.module';
import { SelectMultipleModule } from '../select-multiple/select-multiple.module';
import { SelectModule } from '../select/select.module';
import { AddPollComponent } from './add-poll.component';

@NgModule({
  declarations: [AddPollComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DateTimePickerModule,
    LabelModule,
    SelectModule,
    SearchModule,
    SelectMultipleModule,
  ],
  exports: [AddPollComponent],
})
export class AddPollModule {}
