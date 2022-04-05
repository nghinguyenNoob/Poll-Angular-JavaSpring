import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { ButtonComponent } from './button.component';
import { SharedModule } from '../../shared.module';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [SharedModule],
    })
  )
  .add('Button Component', () => ({
    component: ButtonComponent,
    props: {
      //output
      btnClickEmt: action('btnClickEmt'),
    },
  }));
