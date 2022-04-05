import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationPageComponent } from './notification-page.component';
import { NotificationListModule } from '../../shared/components/notification-list/notification-list.module';
import { NotificationRouter } from './notification-page-routing.module';



@NgModule({
  declarations: [NotificationPageComponent],
  imports: [
    CommonModule,
    NotificationListModule,
    NotificationRouter 
  ],
  exports: [NotificationPageComponent]
})
export class NotificationPageModule { } 
