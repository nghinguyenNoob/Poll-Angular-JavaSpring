import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoDetailModule } from './todo-detail.module';


storiesOf('Pages/Todo Detail', module).add('Todo detail', () => ({
  component: TodoDetailComponent,
  props: {
    todo: {
      todoId: '',
      todoName: 'Meeting',
      description: 'this meeting will begin at 4 PM',
      status: 'Complete',
      deadline: new Date(),
      importance: 'Hight',
      created: new Date(),
      modified: new Date(),
      todoDetailUser: {
        userId: '',
        userName: 'Nguyễn Trương Uyên Nhi',
        fullName: 'Nguyễn Trương Uyên Nhi',
      },
      todoDetailCategory: {
        todoCategoryId: '',
        todoCategoryName: 'Meeting',
      },
    },
    btnClickEmt: action('btnClickEmt'),
    btnClickEmtStatus: action('btnClickEmtStatus'),
    btnClickEmtUpdate: action('btnClickEmtUpdate'),
    btnClickEmtDelete: action('btnClickEmtDelete'),
  },
  moduleMetadata: {
    imports: [TodoDetailModule],
  },
}));
