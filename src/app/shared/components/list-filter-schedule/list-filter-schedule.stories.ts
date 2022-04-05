import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { ICheckBoxItem,CheckboxInterface } from '../../../store/models/checkbox-item.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { ListFilterScheduleComponent } from './list-filter-schedule.component';
import { FilterModule } from './list-filter-schedule.module';

storiesOf('Filter', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [FilterModule, BrowserAnimationsModule],
    })
  )
  .add('filter List', () => ({
    component: ListFilterScheduleComponent,
    props: {
      dataImportance: dataImportance,
      dataCategory: fakeData,
      titleGroupCheckbox: titleGroup,
      placeholderSearch: placeholder,
      labelCategory: labelCategory,
      labelImportance: labelImportance,
      labelFromDate: labelFromDate,
      labelToDate: labelToDate,
      buttonSubmit: configButtonSubmit,
      buttonReset: configButtonReset,
      titleImportance: importance,
      titleCategory: category,

      dataCheckbox : checkboxContent,
      valueFilter: action('filter'),
    },
  }));
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
const checkboxField: ICheckBoxItem[] = [
  {
    label: 'Incomplete',
    checked: false,
    value: 'incomplete',
  },
  {
    label: 'Complete',
    checked: false,
    value: 'complete',
  },
];
const checkboxContent : CheckboxInterface[] = [
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
const importance = 'Importance';
const category = 'Category';
