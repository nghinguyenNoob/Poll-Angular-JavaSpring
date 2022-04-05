import { storiesOf } from "@storybook/angular";
import { moduleMetadata } from '@storybook/angular/dist/client/preview/types';
import { withKnobs } from '@storybook/addon-knobs';
import { LabelComponent } from './label.component';
import { LabelInterface } from '../../../store/models/label.i';

var labels : LabelInterface = {
  content:"Label Component",
  size: 30,
  color: "",
  backgroundColor: ""
}
storiesOf('Label', module)
  .add('usage', () => ({
    component: LabelComponent,
    props: {
        label: labels
    },
  }));
