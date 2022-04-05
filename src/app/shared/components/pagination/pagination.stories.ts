import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { SharedModule } from '../../shared.module';
import { PaginationComponent } from './pagination.component';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('Pagination', module)
    .addDecorator(withKnobs)
    .addDecorator(
        moduleMetadata({
            imports: [BrowserAnimationsModule, MaterialCustomModule],
        })
    )
    .add('pagination-10Page', () => ({
        component: PaginationComponent,
        props: {
            totalRecords: 50,
            recordsPerPage: 5,
            onPageChange: action('page changes'),
        },
    }))
    .add('pagination-20Page', () => ({
        component: PaginationComponent,
        props: {
            totalRecords: 100,
            recordsPerPage: 5,
            onPageChange: action('page changes'),
        },
    }))