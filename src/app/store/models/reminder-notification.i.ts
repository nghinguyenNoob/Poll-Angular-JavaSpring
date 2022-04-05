export interface ReminderNotification {
    eventId: number;
    eventViewPath: string;
    eventStartTime?: Date;
    eventTypeId: number;
    notificationId?: number;
    categoryName?: string;
    notificationTitle: string;
    notificationDescription: string;
}
