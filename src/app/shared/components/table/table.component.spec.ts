import { TodoEffect } from './../../../store/effects/todo.effect';
import { SelectionModel } from '@angular/cdk/collections';
import { MaterialCustomModule } from './../../material-custom/material-custom.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Column, SortType, SortItem } from './../../../store/models/column.i';
import { TableComponent } from './table.component';
import { Subject } from 'rxjs';
import { tr } from 'date-fns/locale';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  let columns: Column[] = [
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
      sort: true,
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
    },
  ];

  let dataSource = [
    { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { id: 3, name: '3', weight: 3, symbol: '3' },
  ];

  let initialSelection = [1];
  let allowMultiSelect = false;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [MaterialCustomModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.columns = columns;
    component.initialSelection = initialSelection;
    component.allowMultiSelect = allowMultiSelect;
    component.dataSource = dataSource;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Init', () => {
    let sortMap = new Map();

    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should return success', () => {
      // arrange
      let subject = new Subject<void>();
      component.eventResetSort = subject.asObservable();
      sortMap.set('id', 'none');
      sortMap.set('name', 'none');
      sortMap.set('weight', 'none');
      fixture.detectChanges();
      let selectionTest = new SelectionModel<Object>(
        allowMultiSelect,
        initialSelection
      );
      let sortMapTest = sortMap;
      // act
      component.ngOnInit();
      subject.next();
      // assert
      expect(component.sortMap).toEqual(sortMapTest);
      expect(component.selection).toEqual(selectionTest);
    });
  });

  describe('toggleSelection', () => {

    let row = {
      title: 'Weight',
      dataIndex: 'weight',
    };

    beforeEach(() => {});

    it('should return success', () => {
      // arrange
      const spy = jest.spyOn(component.rowsSelected, 'emit');
      // act
      component.toggleSelection(row);
      // assert
      expect(component.selection.isSelected(row)).toEqual(true);
      expect(spy).toHaveBeenCalledWith(component.selection.selected);
    });
  });

  describe('toggleSelectionAll', () => {

    beforeEach(() => {
    });

    it('should return value when isSelectedAll = false ', () => {
      //arrange;
      component.isSelectedAll = false;
      const spy = jest.spyOn(component.rowsSelected, 'emit');
      fixture.detectChanges();
      //act;
      component.toggleSelectionAll();
      //assert;
      expect(component.isSelectedAll).toEqual(true);
      expect(spy).toHaveBeenCalledWith(component.selection.selected);
    });

    it('should return value when isSelectedAll = true ', () => {
      // arrange
      component.isSelectedAll = true;
      const spy = jest.spyOn(component.rowsSelected, 'emit');
      fixture.detectChanges();
      // act
      component.toggleSelectionAll();
      // assert
      expect(component.isSelectedAll).toEqual(false);
      expect(spy).toHaveBeenCalledWith(component.selection.selected);
    });
  });

  describe('handlerClickRow', () => {
    let row = {
      title: 'Weight',
      dataIndex: 'weight',
    };
    beforeEach(() => {});

    it('should return success', () => {
      // arrange
      // act
      // assert
      const spy = jest.spyOn(component.rowClicked, 'emit');

      component.handlerClickRow(row);

      expect(spy).toHaveBeenCalledWith(row);
    });
  });

  describe('toggleSort', () => {

    beforeEach(() => {
      component.sortMap.set('id', SortType.none);
      component.sortMap.set('name', SortType.asc);
      component.sortMap.set('weight', SortType.desc);
      fixture.detectChanges();
    });

    it('should return value when sortType = none ', () => {
      // arrange
      let column = 'id';
      const spy = jest.spyOn(component.sort, 'emit');
      fixture.detectChanges();
      let expected: SortItem[] = [
        {
          name: 'id',
          sort: SortType.asc,
        },
        {
          name: 'name',
          sort: SortType.none,
        },
        {
          name: 'weight',
          sort: SortType.none,
        },
      ];
      // act
      component.toggleSort(column);
      // assert
      expect(component.sortMap.get(column)).toEqual(SortType.asc);
      expect(spy).toHaveBeenCalledWith(expected);

      // click twice
      let expectedTwice: SortItem[] = [
        {
          name: 'id',
          sort: SortType.desc,
        },
        {
          name: 'name',
          sort: SortType.none,
        },
        {
          name: 'weight',
          sort: SortType.none,
        },
      ];

      component.toggleSort(column);

      expect(component.sortMap.get(column)).toEqual(SortType.desc);
      expect(spy).toHaveBeenCalledWith(expectedTwice);
    });

    it('should return value when sortType = asc ', () => {
      // arrange
      let column = 'name';
      const spy = jest.spyOn(component.sort, 'emit');
      fixture.detectChanges();
      let expected: SortItem[] = [
        {
          name: 'id',
          sort: SortType.none,
        },
        {
          name: 'name',
          sort: SortType.desc,
        },
        {
          name: 'weight',
          sort: SortType.none,
        },
      ];
      // act
      component.toggleSort(column);
      // assert
      expect(component.sortMap.get(column)).toEqual(SortType.desc);
      expect(spy).toHaveBeenCalledWith(expected);

      // click twice
      let expectedTwice: SortItem[] = [
        {
          name: 'id',
          sort: SortType.none,
        },
        {
          name: 'name',
          sort: SortType.none,
        },
        {
          name: 'weight',
          sort: SortType.none,
        },
      ];

      component.toggleSort(column);

      expect(component.sortMap.get(column)).toEqual(SortType.none);
      expect(spy).toHaveBeenCalledWith(expectedTwice);
    });

    it('should return value when sortType = desc ', () => {
      // arrange
      let column = 'weight';
      const spy = jest.spyOn(component.sort, 'emit');
      fixture.detectChanges();
      let expected: SortItem[] = [
        {
          name: 'id',
          sort: SortType.none,
        },
        {
          name: 'name',
          sort: SortType.none,
        },
        {
          name: 'weight',
          sort: SortType.none,
        },
      ];
      // act
      component.toggleSort(column);
      // assert
      expect(component.sortMap.get(column)).toEqual(SortType.none);
      expect(spy).toHaveBeenCalledWith(expected);

      // click twice
      let expectedTwice: SortItem[] = [
        {
          name: 'id',
          sort: SortType.none,
        },
        {
          name: 'name',
          sort: SortType.none,
        },
        {
          name: 'weight',
          sort: SortType.asc,
        },
      ];

      component.toggleSort(column);

      expect(component.sortMap.get(column)).toEqual(SortType.asc);
      expect(spy).toHaveBeenCalledWith(expectedTwice);
    });

    it('should not return value when not have column', () => {
      // arrange
      // act
      // assert
      component.toggleSort('not thing');
    });
  });

  describe('isTextOverflow', () => {
    const  elem  = document.createElement('div');
    // elem.offsetWidth = 10;
    // elem.scrollWidth = 20;

    // document.body.appendChild(elem);
    beforeEach(() => {
    });
    it('should return success', () => {
    // arrange
    // act
    // jest.spyOn(document.body,'appendChild');
    // component.isTextOverflow(elem);
    // assert
      expect(component.isTextOverflow(elem)).toEqual(false);
    });
  });
});
