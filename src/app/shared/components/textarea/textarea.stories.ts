import { SharedModule } from './../../shared.module';
import { TextareaComponent } from './textarea.component';
import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
storiesOf('Textarea component', module).add('Textarea', () => ({
  component: TextareaComponent,
  props: {
    placeholder: 'Input your text',
    // row: 1,
    // initValue: 'value',
    // name: 'textarea',
    // id: 'textarea',
    value: action('value'),
  },
  moduleMetadata: {
    imports: [SharedModule],
  },
}));
