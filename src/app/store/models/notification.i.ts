export interface Notification {
  notificationId: number;
  title: string;
  description: string;
  eventEndTime: Date;
  eventId :number;
  eventPath : string;
  eventStartTime: Date;
  eventTypeName: string;
  isRead: number;
}

export interface NotificationData {
  data: Notification[];
  pageSize: number;
  page: number;
  total: number;
}
