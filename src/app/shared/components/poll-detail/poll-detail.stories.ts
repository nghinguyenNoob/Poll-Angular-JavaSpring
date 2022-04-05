import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { PollDetailComponent } from './poll-detail.component';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollDetailModule } from './poll-detail.module';


storiesOf('Poll Detail', module)
    .add("PollDetail Component", () => ({
        component: PollDetailComponent,
        moduleMetadata: ({
            imports: [PollDetailModule, BrowserAnimationsModule, MaterialCustomModule],
        }),
        props: {
            voters: voters,
            optionName: 'Đi học',
            topvote: 2,
            backScreenOption: action('back screen option')

        }
    }));

const voteBy = [
    {first_name:"Nguyễn Nhật Anh", last_name:"Anh"},
    {first_name:"Nguyễn Bá Nam", last_name:"Khánh"},
    {first_name:"Nguyễn Công", last_name:"Nghĩ"}
];

const voters = [
    {voteBy: voteBy[0]},
    {voteBy: voteBy[1]},
    {voteBy: voteBy[2]},
]
   