import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { configButton } from '../../../store/models/button.i';
import { Category } from '../../../store/models/category.i';
import { Column } from '../../../store/models/column.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { ButtonFilterSchedule, LabelFilterSchedule, PlaceholderFilterSchedule } from '../../../store/models/schedule-filter.i';
import { LabelModule } from '../label/label.module';
import { ListExcelComponent } from './list-excel.component';

import { ListExcelModule } from './list-excel.module';

storiesOf('Excel List', module)
    .add('ImportExcel Component', () => ({
        component: ListExcelComponent,
        moduleMetadata: {
            imports: [
              ListExcelModule, BrowserAnimationsModule
            ],
          },
        props: {
          notification_columns: columns,
          notification_dataSource: dataSource,
          notification_totalRecords: 100,
          notification_recordsPerPage: 5,
          notification_showRowSelection: false,
          searchText: '',
          searchPlaceholder: 'Search ...',
          buttonGroup: btnGroup,
          dataSelect: cateSelect,
          labelSelect: 'Category',
          showRowAction : true,
          showBtn : true,
          //OutPut
          onPageChange: action('page changes'),
          rowClicked: action('handlerClickRow'),
          sort: action('handlersort'),
          rowsSelected: action('handleselectrow'),
          handlerDetail: action('handlerDetail'),
          textSearch: action('handler seacrh'),
          categorySelected: action('handler category'),
          statusFilter: action('handler status'),
        },
    }));

    const columns: Column[] = [
      {
        title: 'Template Name',
        dataIndex: 'template_name',
      },
      {
        title: 'Description',
        dataIndex: 'description',
      },
      {
        title: 'Date',
        dataIndex: 'date'
      }
    ];
    
    const dataSource = [
      {
        id: 1,
        template_name: 'Template 1',
        description: '123',
        date: '02/02/2020',
      },
      {
        id: 2,
        template_name: 'Template 2',
        description: '123',
        date: '02/02/2020',
      },
      { 
        id: 3,
        template_name: 'Template 3',
        description: '123',
        date: '02/02/2020',
      },
      {
        id: 4,
        template_name: 'Template 4',
        description: '123',
        date: '02/02/2020',
      },
    ];
    
    var cateSelect: LabelledValue<string>[] = [
      {
        label: 'All',
        value: 'all',
      },
      {
        label: 'System',
        value: 'system',
      },
      {
        label: 'Todo',
        value: 'todo',
      },
      {
        label: 'Schedule',
        value: 'schedule',
      },
      {
        label: 'Workflow',
        value: 'workflow',
      },
    ];
    
    var btnGroup = [
      {
        value: 'all',
        displayValue: 'All',
      },
      {
        value: 'read',
        displayValue: 'Already Read',
      },
      {
        value: 'unread',
        displayValue: 'Unread',
      },
      {
        value: 'remove',
        displayValue: 'Remove ',
      },
    ];