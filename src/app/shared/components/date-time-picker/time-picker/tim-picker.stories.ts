import { storiesOf } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TimePickerComponent } from './time-picker.component';
import { action } from '@storybook/addon-actions';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';
storiesOf('TimePicker', module)
  .add('TimePicker Component', () => ({
    component: TimePickerComponent,
    props: {
      getHour: action("getHour"),
      getMinute: action("getMinute"),
      getTimeNow: action("getTimeNow")
    },
    moduleMetadata: {
      imports: [ReactiveFormsModule,MaterialCustomModule]
    }
  }));
