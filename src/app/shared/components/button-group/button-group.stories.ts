import { IButtonGroup } from './../../../store/models/button-group.i';
import { ButtonGroupComponent } from './button-group.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { SharedModule } from '../../shared.module';
const options: IButtonGroup<string>[] = [
  {
    value: 'all',
    displayValue: 'All',
  },
  {
    value: 'read',
    displayValue: 'Already Read',
  },
  {
    value: 'unread',
    displayValue: 'Unread',
  },
  {
    value: 'remove',
    displayValue: 'Remove ',
  },
];
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [SharedModule],
    })
  )
  .add('Button Group', () => ({
    component: ButtonGroupComponent,
    props: {
      buttonGroup: options,
      valueButtonGroup: action('data'),
    },
  }));
