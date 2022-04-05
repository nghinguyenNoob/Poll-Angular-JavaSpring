import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SocketClientService } from '../socket-client/socket-client.service';
import { MenuItem } from '../store/models/menu-item.i';
import { ReminderNotification } from '../store/models/reminder-notification.i';
import { NotificationStoreFacade } from '../store/store-facades/notification.store-facade';
import { IsRead } from '../store/models/is_read.i';
import { NotificationService } from '../store/services/notification.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  menu: MenuItem[] = [
    {
      text: 'Home',
      link: '/',
      icon: 'home',
    },
    {
      text: 'Todo',
      link: '/todo',
      icon: 'list_alt',
    },
    {
      text: 'Schedule',
      link: '/schedule',
      icon: 'event',
    },
    {
      text: 'Excel List',
      link: '/excel',
      icon: 'event',
    },
    {
      text: 'Import',
      link: '/excelTemplateDetail',
      icon: 'input',
    },
    {
      text: 'Poll',
      link: '/poll',
      icon: 'poll',
    }
  ];
  temp = false;
  reminder: ReminderNotification = {
    eventId: 0,
    eventViewPath: '/todo',
    eventStartTime: new Date(),
    eventTypeId: 0,
    notificationId: 0,
    categoryName: 'Notifications',
    notificationTitle: 'Meeting Team',
    notificationDescription: 'This Meeting will begin at 1 PM. Please prepare and be on time ',
  }
  constructor(
    private socketClient: SocketClientService,
    private router: Router,
    private storeFace: NotificationStoreFacade,
    private service: NotificationService,
  ) {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');
    this.socketClient.connectionSocket(token, userName, userId);
  }

  @Input() countNotification: number =1 ;
  ngOnInit(): void {
    this.socketClient.listernNotification$().subscribe((data) => {
      this.reminder = {
        eventId: data.eventId,
        eventViewPath: data.eventPath,
        eventStartTime: data.eventStartTime,
        notificationId: data.notificationId || 0,
        notificationTitle: data.title,
        eventTypeId: data.eventTypeId,
        notificationDescription: data.description,
      }
      this.temp = true;
      setTimeout(() => {
        this.temp = false;
      }, 15000);
    });
    this.storeFace
      .getValueCountNotification()
      .subscribe((data) => {
        if(data !== undefined)
        (this.countNotification = data)
      console.log(this.countNotification)});
  }
  onGetId(popup: Object) {
    console.log(popup);
  }
  onMarkAsRead(popup: Object) {
    console.log(popup);
  }
  navigate(data: string) {
    this.router.navigate([data]);
  }
  navigateNotification(data: string) {
    this.router.navigate([data]);
  }
  readDetailNotification(data: IsRead) {
    data = {
      isRead: 1,
      notificationId: this.reminder.notificationId,
      userId: Number(sessionStorage.getItem('userId')),
    }
    this.service.updateIsRead(data).subscribe();
    this.router.navigate([this.reminder.eventViewPath + this.reminder.eventId]);
    this.temp = false;
  }
}
