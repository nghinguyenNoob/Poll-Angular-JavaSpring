import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LabelledValue } from '../../store/models/labelvalue.i';
import {
  EquipmentNames,
  ScheduleDetail,
  UserNames,
} from '../../store/models/schedule.i';
import { ScheduleService } from '../../store/services/schedule.service';

const selectWeekly: string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
@Component({
  selector: 'brc-schedule-detail-page',
  templateUrl: './schedule-detail-page.component.html',
  styleUrls: ['./schedule-detail-page.component.scss'],
})
export class ScheduleDetailPageComponent implements OnInit {
  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private scheduleService: ScheduleService
  ) {}
  public scheduleDetail: ScheduleDetail;
  public scheduleTime: string;
  public scheduleTimeRepeat: string;
  ngOnInit(): void {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this.scheduleService.getDetailSchedule(id).subscribe((data) => {
      this.scheduleDetail = {
        ...data,
        created: formatDate(
          new Date(data.created),
          'EEEE, MMMM dd, yyyy, HH:mm a',
          'en'
        ),
        modified: new Date(data.modified)
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, ''),
        dueDate: formatDate(
          new Date(data.dueDate),
          'EEEE, MMMM dd, yyyy, HH:mm a',
          'en'
        ),
        startDate: formatDate(
          new Date(data.startDate),
          'EEEE, MMMM dd, yyyy, HH:mm a',
          'en'
        ),
        scheduleId: data.scheduleId.toString(),
        userNames: this.convertUserToString(JSON.parse(data.userNames)),
        equipmentNames: this.convertEquipmentToString(
          JSON.parse(data.equipmentNames)
        ),
      };
      console.log(new Date(data.startDate).toLocaleDateString());
      console.log(new Date(data.dueDate).toLocaleDateString());
      if (
        new Date(data.startDate).toLocaleDateString() ===
        new Date(data.dueDate).toLocaleDateString()
      ) {
        this.scheduleTime =
          this.scheduleDetail.startDate +
          ' - ' +
          formatDate(new Date(data.dueDate), 'HH:mm a', 'en');
      } else {
        this.scheduleTime =
          this.scheduleDetail.startDate + ' - ' + this.scheduleDetail.dueDate;
      }
      if (data.type === 'weekly') {
        this.scheduleTimeRepeat =
          data.type + ' ' + selectWeekly[Number(data.valueRepeat)];
      } else if (data.type === 'monthly') {
        switch (Number(data.valueRepeat) % 10) {
          case 1:
            this.scheduleTimeRepeat = data.type + ' ' + data.valueRepeat + 'st';
          case 2:
            this.scheduleTimeRepeat = data.type + ' ' + data.valueRepeat + 'nd';
          case 3:
            this.scheduleTimeRepeat = data.type + ' ' + data.valueRepeat + 'rd';
          default:
            this.scheduleTimeRepeat = data.type + ' ' + data.valueRepeat + 'th';
        }
      } else {
        this.scheduleTimeRepeat = 'everyday';
      }
      this.checkTypeSchedule(data.type);
    });
  }
  public typeCheck: boolean = false;
  checkTypeSchedule(value: string): void {
    if (value === 'normal') this.typeCheck = true;
  }
  convertEquipmentToString(equipments: EquipmentNames[]): string {
    if (equipments == null) return '';
    return equipments.map((e) => e.equipmentName).join(', ') + '.';
  }
  convertUserToString(users: UserNames[]): string {
    if (users == null) return '';
    return users.map((e) => e.userName).join(', ') + '.';
  }
  btnClickEmt() {
    this.router.navigate(['/schedule']);
  }
}
