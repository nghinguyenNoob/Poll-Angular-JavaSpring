import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { configButton } from '../../../store/models/button.i';
import { LabelInterface } from '../../../store/models/label.i';
import { AddPollComponent } from './add-poll.component';
import { AddPollModule } from './add-poll.module';

storiesOf('Add Poll', module)
  .add('AddPoll Component', () => ({
    component: AddPollComponent,
    moduleMetadata: {
      imports: [AddPollModule, BrowserAnimationsModule],
    },
    props: {
      buttonSubmit: configButtonAdd,
      labelQuestion: labelQuestion,
      labelExpiration: labelExpiration,
      labelOption: labelOption,
      labelAllowMultipleAnswer: labelAllowMultipleAnswer,
      pollFormData: action('data')
    },
  }));

const labelQuestion: LabelInterface = {
  content: 'Question:',
  size: 17,
  color: '',
  backgroundColor: '',
};

const labelExpiration: LabelInterface = {
  content: 'Expiration',
  size: 17,
  color: 'black',
  backgroundColor: '',
}

const labelOption: LabelInterface = {
  content: 'Option:',
  size: 17,
  color: 'black',
  backgroundColor: '',
}

const labelAllowMultipleAnswer: LabelInterface = {
  content: 'Allow multiple poll answers',
  size: 17,
  color: 'black',
  backgroundColor: '',
}

const configButtonAdd: configButton = {
  colorButton: 'primary',
  colorMouseOver: 'Basic',
  colorMouseOut: 'primary',
  type: 'submit',
  text: 'Add Poll',
};

