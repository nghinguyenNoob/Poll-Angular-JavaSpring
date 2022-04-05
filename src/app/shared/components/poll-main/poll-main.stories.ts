import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { PollMainComponent } from './poll-main.component';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollMainModule } from './poll-main.module';

storiesOf('Poll Main', module)
    .add("PollMain Component", () => ({
        component: PollMainComponent,
        moduleMetadata: ({
            imports: [PollMainModule, BrowserAnimationsModule, MaterialCustomModule],
        }),
        props: {
            labelQuestion: 'Question',
            labelExpiration: 'Expiration',
            labelResponse: 'Response',
            titlePoll: 'Poll',
            question: 'Địa điểm du lịch mùa hè?',
            expiration: '2021-03-31 17:30',
            typeInput: 'checkbox',
            responses: response,
            addDataOption: action('add option'),
            changeVoteOption: action('change vote'),
            referOptionPollDetail: action('refer detail'),
            backScreenPoll: action('back screen poll')

        }
    }));

const voteBy =[
	{voteById: 2000,voteByName: "Nguyễn Công Nghĩ"},
	{voteById: 2000,voteByName: "Nguyễn Bá Nam Khánh"}
]

const response = [
    {optionId: 1,optionName: "Đi nhậu",proPercen: 25, voteBy, voteCount:2, isSelectedUser: false},
    {optionId: 2,optionName: "Đi dạo phố",proPercen: 25, voteBy, voteCount:2, isSelectedUser: true},
    {optionId: 3,optionName: "Đi học",proPercen: 25, voteBy, voteCount:2, isSelectedUser: false},
    {optionId: 4,optionName: "Đi về nhà",proPercen: 25, voteBy, voteCount:2, isSelectedUser: false}
]