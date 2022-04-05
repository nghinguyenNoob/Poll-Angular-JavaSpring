import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { storiesOf } from '@storybook/angular';
import { AddListExcelComponent } from './add-list-excel.component';
import { AddListExcelModule } from './add-list-excel.module';



storiesOf('Add Excel ', module)
    .add('Add excel', () => ({
        component: AddListExcelComponent,
        moduleMetadata: {
            imports: [
              BrowserAnimationsModule,AddListExcelModule
            ],
          },
        // props: {
        //   notification_columns: columns,
        //   notification_dataSource: dataSource,
        //   notification_totalRecords: 100,
        //   notification_recordsPerPage: 5,
        //   notification_showRowSelection: false,
        //   searchText: '',
        //   searchPlaceholder: 'Search ...',
        //   buttonGroup: btnGroup,
        //   dataSelect: cateSelect,
        //   labelSelect: 'Category',
        //   showRowAction : true,
        //   //OutPut
        //   onPageChange: action('page changes'),
        //   rowClicked: action('handlerClickRow'),
        //   sort: action('handlersort'),
        //   rowsSelected: action('handleselectrow'),
        //   textSearch: action('handler seacrh'),
        //   categorySelected: action('handler category'),
        //   statusFilter: action('handler status'),
        // },

    }));

    // const columns: Column[] = [
    //   {
    //     title: 'Stt',
    //     dataIndex: 'Stt',
    //     sort: true,
    //   },
    //   {
    //     title: 'Họ và tên nhân viên',
    //     dataIndex: 'Employees',
    //     sort: true,
    //   },
    //   {
    //     title: 'Tên vợ / chồng ',
    //     dataIndex: 'Employees1'
    //   },
    //   {
    //     title: 'Tên con',
    //     dataIndex: 'Employees2',
    //   },
    //   {
    //     title: 'Tuổi',
    //     dataIndex: 'Employees3',
    //   },
    //   {
    //     title: 'Đăng ký suất ăn',
    //     dataIndex: 'Employees4',
    //   },
    //   {
    //     title: 'Không đăng ký suất ăn',
    //     dataIndex: 'Employees5',
    //   },
    // ];

    // const dataSource = [
    //   {
    //     Stt: '1',
    //     Employees: 'nv_quoc',
    //     Employees1: 'Spider men',
    //     Employees3: '3',
    //     Employees4: 'X',
    //     Employees5: '',
    //   },
    //   {
    //     Stt: '2',
    //     Employees: 'n_anh',
    //     Employees1: 'Iron men',
    //     Employees3: '3',
    //     Employees4: 'X',
    //     Employees5: '',
    //   },
    //   {
    //     Stt: '3',
    //     Employees: 'nv_quoc',
    //     Employees1: 'abc',
    //     Employees3: '3',
    //     Employees4: 'X',
    //     Employees5: '',
    //   },
    //   {
    //     Stt: '4',
    //     Employees: 'nv_quoc',
    //     Employees1: 'abc',
    //     Employees3: '3',
    //     Employees4: 'X',
    //     Employees5: '',
    //   },
    //   {
    //     Stt: '5',
    //     Employees: 'nv_quoc',
    //     Employees1: 'abc',
    //     Employees3: '3',
    //     Employees4: 'X',
    //     Employees5: '',
    //   },
    // ];

    // var cateSelect: LabelledValue<string>[] = [
    //   {
    //     label: 'All',
    //     value: 'all',
    //   },
    //   {
    //     label: 'System',
    //     value: 'system',
    //   },
    //   {
    //     label: 'Todo',
    //     value: 'todo',
    //   },
    //   {
    //     label: 'Schedule',
    //     value: 'schedule',
    //   },
    //   {
    //     label: 'Workflow',
    //     value: 'workflow',
    //   },
    // ];

    // var btnGroup = [
    //   {
    //     value: 'all',
    //     displayValue: 'All',
    //   },
    //   {
    //     value: 'read',
    //     displayValue: 'Already Read',
    //   },
    //   {
    //     value: 'unread',
    //     displayValue: 'Unread',
    //   },
    //   {
    //     value: 'remove',
    //     displayValue: 'Remove ',
    //   },
    // ]; 