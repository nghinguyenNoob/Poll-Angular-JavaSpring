import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { ButtonModule } from '../button/button.module';
import { LabelModule } from '../label/label.module';
import { ScheduleDetailComponent } from './schedule-detail.component';

@NgModule({
  declarations: [ScheduleDetailComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    FormsModule,
    LabelModule,
    ButtonModule,
    FlexLayoutModule
  ],
  exports: [ScheduleDetailComponent],
})
export class ScheduleDetailModule {}
