import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { configButton } from '../../../store/models/button.i';
import type { ScheduleDetail } from '../../../store/models/schedule.i';

@Component({
  selector: 'brc-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss'],
})
export class ScheduleDetailComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    //this.scheduleDetail.startDate = this.convertDateToDayName(this.scheduleDetail.startDate) + ', ' + this.convertDateToMonthName(this.scheduleDetail.startDate);
  }
  @Input() scheduleTimeRepeat : string;
  @Input() typeCheck: boolean;
  @Input() scheduleTime: string;
  @Input() scheduleDetail: ScheduleDetail = {
    scheduleId: '',
    title: '',
    description: '',
    startDate: '',
    dueDate: '',
    timeDueRepeat: '',
    timeStartRepeat: '',
    createBy: '',
    createdByName: '',
    createByFullName: '',
    scheduleCategoryId: '',
    scheduleCategoryName: '',
    created: '',
    modified: '',
    place: '',
    important: '',
    equipmentNames: '',
    type: '',
    valueRepeat: '',
    userNames: '',
  };

  @Output() btnClickEmt: EventEmitter<void> = new EventEmitter<void>();
  configButtonAdd: configButton = {
    colorButton: 'primary',
    colorMouseOver: 'Basic',
    colorMouseOut: 'primary',
    type: 'submit',
    text: 'OK!',
  };
  clickButton() {
    this.btnClickEmt.emit();
  }
  checkInDate() {
    if (
      new Date(this.scheduleDetail.startDate).toLocaleDateString() ===
      new Date(this.scheduleDetail.dueDate).toLocaleDateString()
    ) {
      this.scheduleDetail.dueDate = formatDate(
        new Date(this.scheduleDetail.dueDate),
        'hh:mm aaa',
        'en'
      );
    }
  }
}
