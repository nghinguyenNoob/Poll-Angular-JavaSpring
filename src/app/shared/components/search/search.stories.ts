import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { SearchComponent } from './search.component';
import { MatIconModule } from '@angular/material/icon';

var placeholder = 'Enter text to search';

storiesOf('Search', module).add('Search Component', () => ({
  component: SearchComponent,
  props: {
    placeholder: placeholder,

    textSearch: action('textSearch'),
  },
  moduleMetadata: {
    imports: [MatIconModule],
  },
}));
