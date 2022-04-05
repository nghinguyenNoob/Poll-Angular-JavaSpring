import { storiesOf } from '@storybook/angular';
import { SelectMultipleComponent } from './select-multiple.component';
import { action } from '@storybook/addon-actions';
import { SharedModule } from '../../shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';

storiesOf('Select', module).add('Select multiple', () => ({
  component: SelectMultipleComponent,
  props: {
    values: [
      { categoryName: 'Python', categoryId: 1 },
      { categoryName: 'React', categoryId: 2 },
      { categoryName: 'PHP', categoryId: 3 },
      { categoryName: 'Laravel', categoryId: 4 },
      { categoryName: 'NestJS', categoryId: 5 },
      { categoryName: 'Spring Boot', categoryId: 6 },
      { categoryName: 'Java', categoryId: 7 },
      { categoryName: 'Ruby', categoryId: 8 },
    ],
    selected :[],
    label: 'label',
    outputSelected: action('outputSelected'),
  },
  moduleMetadata: {
    imports: [BrowserAnimationsModule,MaterialCustomModule],
  },
}));

