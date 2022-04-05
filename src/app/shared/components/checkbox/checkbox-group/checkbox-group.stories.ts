import { CheckboxModule } from './../checkbox.module';
import { ICheckBoxItem } from './../../../../store/models/checkbox-item.i';
import { CheckboxGroupComponent } from './checkbox-group.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
const checkboxField: ICheckBoxItem[] = [
  {
    label: 'Incomplete',
    checked: false,
    value: 'incomplete',
  },
  {
    label: 'Complete',
    checked: false,
    value: 'complete',
  },
];
storiesOf('Checkbox', module).add('group', () => ({
  component: CheckboxGroupComponent,
  moduleMetadata: {
    imports: [CheckboxModule],
  },
  props: {
    titleGroup: 'Status',
    checkboxField,
    dataCheckBox: action('data'),
  },
}));
