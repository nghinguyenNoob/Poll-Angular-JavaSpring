import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { SharedModule } from '../../shared.module';
import { SelectComponent } from './select.component';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { SelectModule } from './select.module';

var fakeData: LabelledValue<string>[] = [
  {
    label: 'Angular',
    value: '1',
  },
  {
    label: 'React',
    value: '2'
  },
  {
    label: 'Ruby on rails',
    value: '3'
  },
  {
    label: 'Laravel',
    value: '4'
  },
  {
    label: 'Python',
    value: '5'
  },
]

var fakeLabel = 'Your option'
storiesOf('Select', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserAnimationsModule,MaterialCustomModule, SelectModule],
    })
  )
  .add('Select Component', () => ({
    component: SelectComponent,
    props: {
      //input
      data: fakeData,
      label: fakeLabel,
      //output
      getValue: action("getValue"),
    },
  }));
