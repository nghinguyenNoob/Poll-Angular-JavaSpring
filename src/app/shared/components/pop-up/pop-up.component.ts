import {
  animate, state,
  style,
  transition, trigger
} from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import type { ReminderNotification } from '../../../store/models/reminder-notification.i';
@Component({
  selector: 'brc-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(80vw)' })),
      transition('void => *', [
        style({ transform: 'translateX(120vw)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(120vw)' }))
      ])
    ])
  ]
})
export class PopUpComponent implements OnInit {

  @ViewChild('notification') notification: ElementRef;
  @Input() temp: boolean = false;
  @Input() reminder: ReminderNotification;
  @Output() getId = new EventEmitter<{ eventId: number, notificationId: number }>();
  @Output() markAsRead = new EventEmitter<{ isRead: boolean, notificationId: number }>();
  @Output() readDetail = new EventEmitter();

  constructor() { }

  public ngOnInit() {
    // call this setTimer method when you want to set timer
  }

  markedReaded() {
    const notificationIdTemp = this.reminder.notificationId;
    this.markAsRead.emit({ isRead: true, notificationId: notificationIdTemp });
    this.notification.nativeElement.style.display = "none";

  }

  cancelNotification() {
    this.notification.nativeElement.style.display = "none";
  }

  readDetailNotification() {
    this.readDetail.emit();
  }
  getValueNotification() {
    let type = this.reminder.eventTypeId;
    switch (type) {
      case 1: return 'Schedule: Meeting/ '
        + this.reminder.notificationTitle
        + ' Start at '
        + this.reminder.eventStartTime;
      case 2: return 'Todo: '
        + this.reminder.notificationTitle
        + ' Deadline at: '
        + this.reminder.eventStartTime;
      default:
        return '/Event type name/: '
          + this.reminder.notificationTitle
          + '/' + this.reminder.eventStartTime;
    }
  }
}
