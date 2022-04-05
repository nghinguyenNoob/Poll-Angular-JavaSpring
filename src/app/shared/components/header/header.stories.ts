import { SharedModule } from '../../shared.module';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { HeaderItemComponent } from '../header-item/header-item.component';
import { HeaderComponent } from '../header/header.component'
import { withKnobs } from '@storybook/addon-knobs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('Header List', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: '#3F51B5', default: true }],
  })
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserAnimationsModule,SharedModule],
    })
  )
  .add('Header', () => ({
    component: HeaderComponent,
    props: {
      menu: [
        {
          text: 'Home',
          link: '/',
          icon: 'home'
        },
        {
          text: 'Todo',
          link: '/todo',
          icon: 'list_alt'
        },
        {
          text: 'Schedule',
          link: '/schedule',
          icon: 'list_alt'
        },
      ],
      countNotification : 2,
    },
  }))
  .add('Item', () => ({
    component: HeaderItemComponent,
    moduleMetadata: {
      imports: [SharedModule],
    },
    props: {
      tab: {
        link: '/home ',
        icon: 'home',
        text: 'Home'
      },
    },
  }));
