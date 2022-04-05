import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './../../shared.module';
import { Column } from './../../../store/models/column.i';
import { TableComponent } from './table.component';
import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

storiesOf('Table component', module)
  .add('Table', () => ({
    component: TableComponent,
    props: {
      columns: columns,
      dataSource: dataSource,
      rowClicked: action('rowClicked'),
    },
    moduleMetadata: {
      imports: [SharedModule, BrowserAnimationsModule],
    },
  }))
  .add('Table with checkbox', () => ({
    component: TableComponent,
    props: {
      columns: columns,
      dataSource: dataSource,
      showRowSelection: true,
      rowClicked: action('rowClicked'),
      rowsSelected: action('rowsSelected'),
    },
    moduleMetadata: {
      imports: [SharedModule, BrowserAnimationsModule],
    },
  }))
  .add('Table with checkbox and sort columns', () => ({
    component: TableComponent,
    props: {
      columns: columnHasSorts,
      dataSource: dataSource,
      showRowSelection: true,
      rowClicked: action('rowClicked'),
      rowsSelected: action('rowsSelected'),
      sort: action('sort'),
    },
    moduleMetadata: {
      imports: [SharedModule, BrowserAnimationsModule],
    },
  }))
  .add('Table with cell text over width', () => ({
    component: TableComponent,
    props: {
      columns: columnHasSorts,
      dataSource: dataSourceTextOverWidth,
      showRowSelection: true,
      rowClicked: action('rowClicked'),
      rowsSelected: action('rowsSelected'),
      sort: action('sort'),
    },
    moduleMetadata: {
      imports: [SharedModule, BrowserAnimationsModule],
    },
  }))
  .add('Table with action', () => ({
    component: TableComponent,
    props: {
      columns: columns,
      dataSource: dataSourceTextOverWidth,
      showRowAction: true,
      rowClicked: action('rowClicked'),
      rowsSelected: action('rowsSelected'),
      sort: action('sort'),
    },
    moduleMetadata: {
      imports: [SharedModule, BrowserAnimationsModule],
    },
  }));

// mock data

let columns: Column[] = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
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

let columnHasSorts: Column[] = [
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

let dataSource = [
  { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

let dataSourceTextOverWidth = [
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
