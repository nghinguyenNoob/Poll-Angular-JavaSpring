import { storiesOf } from '@storybook/angular';

import { action } from '@storybook/addon-actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { SelectMultipleSearchComponent } from './select-multiple-search.component';
import { FormsModule } from '@angular/forms';

storiesOf('SelectMultipleSearch', module).add('Select multiple', () => ({
  component: SelectMultipleSearchComponent,
  props: {
    values: [
      { categoryId: 1, categoryName: 'Python'},
      { categoryId: 2, categoryName: 'React' },
      { categoryId: 3, categoryName: 'PHP' },
      { categoryId: 4, categoryName: 'Laravel'},
      { categoryId: 5, categoryName: 'NestJS' },
      { categoryId: 6 , categoryName: 'Spring Boot'},
      { categoryId: 7, categoryName: 'Java' },
      { categoryId: 8 , categoryName: 'Ruby'},
    ],
    selected :[],
    label: 'label',
    outputSelected: action('outputSelected'),
  },
  moduleMetadata: {
    imports: [BrowserAnimationsModule,MaterialCustomModule, FormsModule],
  },
}));

