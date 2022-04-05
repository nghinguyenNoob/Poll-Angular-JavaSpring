import { storiesOf } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker.component';
import { action } from '@storybook/addon-actions';
import { MaterialCustomModule } from '../../../material-custom/material-custom.module';


storiesOf('DatePicker', module)
  .add('DatePicker Component', () => ({
    component: DatePickerComponent,
    moduleMetadata: {
      imports: [MaterialCustomModule]
    },
    props: {
      getDate: action('detail'),
    }
  }));
