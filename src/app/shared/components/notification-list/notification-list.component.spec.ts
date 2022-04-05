import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { windowCount } from 'rxjs/operators';
import { SortItem } from '../../../store/models/column.i';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { ButtonModule } from '../button/button.module';
import { FilterNotificationModule } from '../filter-notification/filter-notification.module';
import { PaginationModule } from '../pagination/pagination.module';
import { SearchModule } from '../search/search.module';
import { TableModule } from '../table/table.module';

import { NotificationListComponent } from './notification-list.component';

describe('NotificationListComponent', () => {
  let component: NotificationListComponent;
  let fixture: ComponentFixture<NotificationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationListComponent],
      imports: [
        CommonModule,
        MaterialCustomModule,
        FormsModule,
        FlexLayoutModule,
        FilterNotificationModule,
        ButtonModule,
        SearchModule,
        PaginationModule,
        TableModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('OnChanges', () => {
    it('windown.innerWidth > 1000', () => {
      global.innerWidth = 1001;
      const sizeFlexFilter = 20;
      const fontSizeTitle = 25;
      const filterButton = false;
      const showToolbar = false;
      component.ngOnChanges();
      expect(component.sizeFlexFilter).toEqual(sizeFlexFilter);
      expect(component.fontSizeTitle).toEqual(fontSizeTitle);
      expect(component.filterButton).toEqual(filterButton);
      expect(component.showToolbar).toEqual(showToolbar);
    });
    it('windown.innerWidth < 600', () => {
      global.innerWidth = 590;
      component.ngOnChanges();
      const filterButton = true;
      const fontSizeTitle = 15;
      const sizeFlexFilter = 0;
      fixture.detectChanges();
      expect(component.sizeFlexFilter).toEqual(sizeFlexFilter);
      expect(component.fontSizeTitle).toEqual(fontSizeTitle);
      expect(component.filterButton).toEqual(filterButton);
    });
    it('windown.innerWidth > 600 and < 1000', () => {
      global.innerWidth = 800;
      component.ngOnChanges();
      const filterButton = true;
      const sizeFlexFilter = 0;
      const fontSizeTitle = 20;

      fixture.detectChanges();
      expect(component.sizeFlexFilter).toEqual(sizeFlexFilter);
      expect(component.fontSizeTitle).toEqual(fontSizeTitle);
      expect(component.filterButton).toEqual(filterButton);
    });
  });
  describe('handleonPageChange', () => {
    it('should emit data ', () => {
      const expected = 1;

      const spy = jest.spyOn(component.onPageChange, 'emit');
      component.handleonPageChange(1);
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
  describe('handleClickRow', () => {
    it('should emit data ', () => {
      const expected: Object = {};
      const spy = jest.spyOn(component.rowClicked, 'emit');
      component.handleClickRow(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
  describe('handlesort', () => {
    it('should emit data ', () => {
      const expected: SortItem[] = [];
      const spy = jest.spyOn(component.sort, 'emit');
      component.handlesort(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
  describe('handleSelectRow', () => {
    it('should emit data ', () => {
      const expected: Object = {};
      const spy = jest.spyOn(component.rowsSelected, 'emit');
      component.handleSelectRow(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
  describe('handleSearch', () => {
    it('should emit data ', () => {
      const expected: string = '';
      const spy = jest.spyOn(component.textSearch, 'emit');
      component.handleSearch(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
  describe('getScreenSize', () => {
    it('windown.innerWidth > 1000', () => {
      global.innerWidth = 1001;
      component.getScreenSize();
      const sizeFlexFilter = 20;
      const fontSizeTitle = 25;
      const filterButton = false;
      const showToolbar = false;
      expect(component.sizeFlexFilter).toEqual(sizeFlexFilter);
      expect(component.fontSizeTitle).toEqual(fontSizeTitle);
      expect(component.filterButton).toEqual(filterButton);
      expect(component.showToolbar).toEqual(showToolbar);
    });
    it('windown.innerWidth < 600', () => {
      global.innerWidth = 599;
      component.getScreenSize();
      const filterButton = true;
      const fontSizeTitle = 15;
      const sizeFlexFilter = 0;
      fixture.detectChanges();
      expect(component.sizeFlexFilter).toEqual(sizeFlexFilter);
      expect(component.fontSizeTitle).toEqual(fontSizeTitle);
      expect(component.filterButton).toEqual(filterButton);
    });
    it('windown.innerWidth < 1000 and > 600', () => {
      global.innerWidth = 800;
      component.getScreenSize();
      const filterButton = true;
      const sizeFlexFilter = 0;
      const fontSizeTitle = 20;
      expect(component.sizeFlexFilter).toEqual(sizeFlexFilter);
      expect(component.fontSizeTitle).toEqual(fontSizeTitle);
      expect(component.filterButton).toEqual(filterButton);
    });
  });
  describe('changeShowToolbar', () => {
    it('should change showToolbar ', () => {
      const expected = component.showToolbar;
      component.changeShowToolbar();
      expect(component.showToolbar).toEqual(!expected);
    });
  });
  describe('getValueCategory', () => {
    it('should emit value ', () => {
      const expected : any = '';
      const spy = jest.spyOn(component.categorySelected, 'emit');
      const spy2 = jest.spyOn(component.eventPagination, 'next');
      component.getValueCategory(expected);
      expect(spy).toHaveBeenCalledWith(expected);
      expect(spy2).toHaveBeenCalledWith();
    });
  });
  describe('getValueStatus', () => {
    it('should emit value ', () => {
      const expected : any = '';
      const spy = jest.spyOn(component.statusFilter, 'emit');
      const spy2 = jest.spyOn(component.eventPagination, 'next');
      component.getValueStatus(expected);
      expect(spy).toHaveBeenCalledWith(expected);
      expect(spy2).toHaveBeenCalledWith();
    });
  });
  describe('getValueStatus', () => {
    it('should emit value ', () => {
      const expected : string = "Reset Page";
      const spy = jest.spyOn(component.resetPage, 'emit');
      const spy2 = jest.spyOn(component.eventsSubject, 'next');
      const spy3 = jest.spyOn(component.eventPagination, 'next');
      const spy4 = jest.spyOn(component.eventSearch, 'next');
      component.clickResetPage();
      expect(spy).toHaveBeenCalledWith(expected);
      expect(spy2).toHaveBeenCalledWith();
      expect(spy3).toHaveBeenCalledWith();
      expect(spy4).toHaveBeenCalledWith();
    });
  });
});
