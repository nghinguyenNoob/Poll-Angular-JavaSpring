import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { storiesOf } from "@storybook/angular";
import { DateTimePickerComponent } from './date-time-picker.component';
import { DateTimePickerModule } from './date-time-picker.module'

storiesOf('DateTimePicker', module)
  .add('usage', () => ({
    component: DateTimePickerComponent,
    moduleMetadata: {
        imports: [DateTimePickerModule,BrowserAnimationsModule],
      },
      props: {
        getDay: action("Day"),
        getTimeNow: action("Time nows"),
        getHour: action("Hour"),
        getMinute: action("Minutes")
      }
  }));
