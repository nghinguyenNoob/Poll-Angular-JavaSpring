import { action } from '@storybook/addon-actions';
import { storiesOf } from "@storybook/angular";
import { SharedModule } from '../../../shared.module';
import { CheckboxNewComponent } from './checkbox-new.component';

storiesOf('CheckboxNew', module).add('usage', () => ({
    component: CheckboxNewComponent,
    moduleMetadata: {
      imports: [SharedModule],
    },
    props: {
    //   label: 'Example',
    //   isChecked: false,
    //   valueField: 'complated',
     
    dataCheckBox: action('checked'),
    },
  }));