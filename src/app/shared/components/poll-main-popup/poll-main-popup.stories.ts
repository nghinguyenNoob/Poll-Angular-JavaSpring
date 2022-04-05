import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { PollMainPopupComponent } from './poll-main-popup.component';
import { PollMainPopupModule } from './poll-main-popup.module';

storiesOf('Poll Main Popup', module)
    .add("PollMainPopup Component", () => ({
        component: PollMainPopupComponent,
        moduleMetadata: ({
            imports: [PollMainPopupModule, BrowserAnimationsModule, MaterialCustomModule],
        }),
        props: {
            statusAddPopup: 'block',
            dataFormOption: action('data option'),
            confirmCancel: action('cancel')
        }
    }))
