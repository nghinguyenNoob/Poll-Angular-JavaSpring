import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { AddTodoComponent } from './add-todo.component';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTodoModule } from './add-todo.module';

storiesOf('Pages/Add Todo', module)
    .addDecorator(withKnobs)
    .addDecorator(
        moduleMetadata({
            imports: [AddTodoModule, BrowserAnimationsModule, MaterialCustomModule],
        })
    )
    .add("Demo", () => ({
        component: AddTodoComponent,
        props: {
            CategoryArray: [
                {
                    label: "Todo",
                    value: 1
                },
                {
                    label: 'Schedule',
                    value: 2
                }
            ],
            ImportanceArray: [
                {
                    label: "Important",
                    value: "Important"
                },
                {
                    label: "No Important",
                    value: "No Important"
                }
            ],
            addTodo: action('Add todo')

        }
    }))
