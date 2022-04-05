import { CheckboxModule } from './../checkbox.module';
import { CheckboxComponent } from './checkbox.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared.module';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
storiesOf('Checkbox', module).add('usage', () => ({
  component: CheckboxComponent,
  moduleMetadata: {
    imports: [CheckboxModule],
  },
  props: {
    label: 'Example',
    isChecked: false,
    valueField: 'complated',
    getChange: action('checked'),
  },
}));
