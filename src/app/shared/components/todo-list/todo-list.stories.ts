import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { CheckboxInterface, ICheckBoxItem } from '../../../store/models/checkbox-item.i';
import { Column } from '../../../store/models/column.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { Todo } from '../../../store/models/todo.i';
import { TodoListComponent } from './todo-list.component';
import { TodoListModule } from './todo-list.module';

storiesOf('Pages/Todo List', module)
    .add('TodoList Component', () => ({
        component: TodoListComponent,
        moduleMetadata: {
            imports: [
                TodoListModule,BrowserAnimationsModule
            ],
          },
        props: {
            //Input
            todoColumns: columns,
            todoDataSource: dataSource,
            todoTotalRecords: 100,
            todoRecordsPerPage: 5,
            todoShowRowSelection: false,
            todoDataImportance: dataImportance,
            todoDataCategory: fakeData,
            todoDataCheckbox: checkboxField,
            todoTitleGroupCheckbox: titleGroup,
            todoPlaceholderSearch: placeholder,
            todoLabelCategory: labelCategory,
            todoTitleImportance: labelImportance,
            todoLabelFromDate: labelFromDate,
            todoLabelToDate: labelToDate,
            todoButtonSubmit: configButtonSubmit,
            todoButtonReset: configButtonReset,
            todoLabelImportance: importance,
            todoTitleCategory: category,
            valueFilter: action('filter'),
            //OutPut
            btnAddTodo: action('btn add'),
            onPageChange: action('page changes'),
            rowClicked: action('handlerClickRow'),
            sort: action('handlersort'),
            rowsSelected: action('handleselectrow'),
        },

    }));

// mock data
const columns: Column[] = [
    {
        title: 'Todo Name',
        dataIndex: 'todoName',
        sort: true,
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
    {
        title: 'Deadline',
        dataIndex: 'deadline',
        sort: true,
    },
    {
        title: 'Importance',
        dataIndex: 'importance',
        sort: true,
    },
    {
        title: 'Category',
        dataIndex: 'category',
        sort: true,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        sort: true,
    },
];

const columnHasSorts: Column[] = [
    {
        title: 'Id',
        dataIndex: 'id',
        sort: true,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        sort: true,
    },
    {
        title: 'Weight',
        dataIndex: 'weight',
    },
    {
        title: 'Symbol',
        dataIndex: 'symbol',
    },
];

const dataSource = [
    { id: 1, todoName: 'Read book', description: 'Open Library is an open', deadline: '01/01/2020', importance: 'Hard', category: 'Homework', status: 'Complate' },
    { id: 2, todoName: 'Do homework', description: 'Open Library is an open', deadline: '01/02/2020', importance: 'Easy', category: 'Homework', status: 'Complate' },
    { id: 3, todoName: 'Play game', description: 'Open Library is an open', deadline: '11/01/2020', importance: 'Hard', category: 'Game', status: 'Incomplate' },
    { id: 4, todoName: 'Exercise', description: 'Open Library is an open', deadline: '01/05/2020', importance: 'Medium', category: 'Exercise', status: 'Complate' },
    { id: 5, todoName: 'Create component', description: 'Open Library is an open', deadline: '01/01/2020', importance: 'Hard', category: 'Homework', status: 'Complate' },
    { id: 6, todoName: 'Meeting', description: 'Open Library is an open', deadline: '11/11/2020', importance: 'Medium', category: 'Home', status: 'Incomplate' },
    { id: 7, todoName: 'Go home', description: 'Open Library is an open', deadline: '18/3/2020', importance: 'Easy', category: 'Homework', status: 'Incomplate' },
    { id: 8, todoName: 'Time work', description: 'Open Library is an open', deadline: '01/09/2020', importance: 'Easy', category: 'Homework', status: 'Complate' },
    { id: 9, todoName: 'Time learning NestJS', description: 'Open Library is an open', deadline: '01/10/2020', importance: 'Hard', category: 'Homework', status: 'Incomplate' },
    { id: 10, todoName: 'Time eat', description: 'Open Library is an open', deadline: '02/01/2020', importance: 'Medium', category: 'Exercise', status: 'Complate' }
];

const dataSourceTextOverWidth = [
    {
        id: 1,
        name: 'Hydrogen Hydrogen Hydrogen Hydrogen Hydrogen Hydrogen Hydrogen ',
        weight: 1.0079,
        symbol: 'H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H H ',
    },
    { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    {
        id: 5,
        name:
            'Boron Boron Boron Boron Boron Boron Boron Boron Boron Boron Boron Boron Boron Boron Boron ',
        weight: 10.811,
        symbol: 'B',
    },
    { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

//filter
const placeholder = 'search todo...';
const titleGroup = 'Status';
const dataImportance: LabelledValue<string>[] = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
];
const fakeData: Category[] = [
  { categoryName: 'Python', categoryId: 1 },
  { categoryName: 'React', categoryId: 2 },
  { categoryName: 'PHP', categoryId: 3 },
  { categoryName: 'Laravel', categoryId: 4 },
  { categoryName: 'NestJS', categoryId: 5 },
  { categoryName: 'Spring Boot', categoryId: 6 },
  { categoryName: 'Java', categoryId: 7 },
  { categoryName: 'Ruby', categoryId: 8 },
];
const checkboxField : CheckboxInterface[] = [
  {name : "Complete", checked : false},
  {name : "Incomplete", checked : false},
]
const labelCategory: LabelInterface = {
  content: 'Category',
  size: 17,
  color: '',
  backgroundColor: '',
};
const labelImportance: LabelInterface = {
  content: 'Importance',
  size: 17,
  color: '',
  backgroundColor: '',
};
const labelFromDate: LabelInterface = {
  content: 'From date',
  size: 17,
  color: '',
  backgroundColor: '',
};
const labelToDate: LabelInterface = {
  content: 'To date',
  size: 17,
  color: '',
  backgroundColor: '',
};
const configButtonSubmit: configButton = {
  colorButton: 'primary',
  colorMouseOver: 'primary',
  colorMouseOut: 'primary',
  type: 'submit',
  text: 'Filter',
};
const configButtonReset: configButton = {
  colorButton: 'basic',
  colorMouseOver: 'basic',
  colorMouseOut: 'basic',
  type: 'reset',
  text: 'Clear',
};
const importance = {content :'Importance'};
const category = 'Category';
