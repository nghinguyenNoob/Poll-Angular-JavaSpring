import { storiesOf } from "@storybook/angular";
import { NotificationIconComponent } from './notification-icon.component';
import { SharedModule } from '../../shared.module';
storiesOf('Notification', module).add('Notification icon', () => ({
  component: NotificationIconComponent,
  props: {
    countNotification: 12,
  },
  moduleMetadata: {
    imports: [SharedModule],
  },
}));
