import { MatPaginatorCustomModule } from './mat-paginator-custom.module';
import { MatPaginatorCustomComponent } from './mat-paginator-custom.component';
import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
storiesOf('Pagination', module).add('Pagination Material', () => ({
  component: MatPaginatorCustomComponent,
  props: {
    total: 100,
    pageSize: 10,
    onPageChange: action('page changes'),
  },
  moduleMetadata: {
    imports: [MatPaginatorCustomModule, BrowserAnimationsModule],
  },
}));
