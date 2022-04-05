import { action } from '@storybook/addon-actions';
import { storiesOf } from "@storybook/angular";
import { PopUpComponent } from './pop-up.component';
import { PopupModule } from './pop-up.module';

storiesOf('Notification Popup', module).add('Notification Popup', () => ({
  component: PopUpComponent,
  props: {
    temp: true,
    reminder: {
      eventId: 0,
      eventViewPath: '/todo',
      eventStartTime: new Date(),
      eventTypeId: 0,
      notificationId: 0,
      categoryName: 'Notifications',
      notificationTitle: 'Meeting Team',
      notificationDescription: 'This Meeting will begin at 1 PM. Please prepare and be on time ',
    },
    getId: action('link'),
    markAsRead: action('markAsREad'),
    readDetail: action('linkNotification'),
  },
  moduleMetadata: {
    imports: [PopupModule],
  },
}));
