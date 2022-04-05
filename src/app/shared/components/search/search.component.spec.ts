import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [CommonModule, MaterialCustomModule, FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Init', () => {
    let valueInput = {
      placeholder: 'Search Box',
      searchText: 'Todo',
      eventResetSearch: new Subject<void>(),
    };
    beforeEach(() => {
      component.eventResetSearch = valueInput.eventResetSearch.asObservable();
      component.placeholder = valueInput.placeholder;
      component.searchText = valueInput.searchText;
    });
    it('should reset Search', () => {
      component.ngOnInit();
      valueInput.eventResetSearch.next();
      fixture.detectChanges();
      const searchText = '';
      const value = fixture.debugElement.nativeElement.querySelectorAll(
        'input'
      );
      expect(component.searchText).toBe(searchText);
      expect(value[0].getAttribute('placeholder')).toEqual(
        component.placeholder
      );
      expect(value[0].getAttribute('ng-reflect-model')).toEqual(
        component.searchText
      );
    });
  });
  describe('search', () => {
    it('should emit data ', () => {
      const expected = 'test';
      const value = fixture.debugElement.nativeElement.querySelectorAll(
        'input'
      );
      const spy = jest.spyOn(component.textSearch, 'emit');
      value[0].setAttribute('value', 'test');
      component.search(expected);
      expect(value[0].getAttribute('value')).toEqual(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
});
