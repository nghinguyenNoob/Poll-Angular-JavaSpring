import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brc-notification-icon',
  templateUrl: './notification-icon.component.html',
  styleUrls: ['./notification-icon.component.scss'],
})
export class NotificationIconComponent implements OnInit, OnChanges {

  @Input() countNotification: number;
  @Output() emitNotificationClick : EventEmitter<string> = new EventEmitter<string>();
  hidden = false;
  constructor() {}
  ngOnInit(): void {
    if (this.countNotification == 0 || this.countNotification == undefined) this.hidden = true;
  }
  ngOnChanges(){
    if (this.countNotification == 0 || this.countNotification == undefined) this.hidden = true;
  }
  toggleBadgeVisibility() {
    this.emitNotificationClick.emit('/notification');
  }
}
