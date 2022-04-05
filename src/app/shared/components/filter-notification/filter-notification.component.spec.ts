import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { MaterialCustomModule } from '../../material-custom/material-custom.module';
import { SharedModule } from '../../shared.module';
import { SelectModule } from '../select/select.module';

import { FilterNotificationComponent } from './filter-notification.component';

describe('FilterNotificationComponent', () => {
  let component: FilterNotificationComponent;
  let fixture: ComponentFixture<FilterNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterNotificationComponent],
      imports: [
        CommonModule,
        MaterialCustomModule,
        FormsModule,
        SharedModule,
        FlexLayoutModule,
        SelectModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Init', () => {
    let valueInput = {
      event: new Subject<void>(),
      dataSelect: [
        {
          eventName: 'Todo',
        },
        {
          eventName: 'Schedule',
        },
      ],
      labelSelect: 'Category',
    };
    beforeEach(() => {
      (component.events = valueInput.event.asObservable()),
        (component.dataSelect = valueInput.dataSelect),
        (component.labelSelect = valueInput.labelSelect);
    });
    it('should set valueFocus and valueCategory ', () => {
      component.ngOnInit();
      fixture.detectChanges();
      valueInput.event.next();
      const valueFocus: number = -1;
      const valueCategory: number = 0;
      const valueDataSelect = fixture.debugElement.nativeElement.querySelectorAll(
        'mat-list-option'
      );
      const valueLabel = fixture.debugElement.nativeElement.querySelectorAll(
        'h2'
      );
      expect(component.valueFocus).toBe(valueFocus);
      expect(component.valueCategory).toBe(valueCategory);
      expect(valueDataSelect[1].textContent).toBe(
        component.dataSelect[0].eventName
      );
      expect(valueDataSelect[2].textContent).toEqual(
        component.dataSelect[1].eventName
      );
      expect(valueLabel[0].textContent).toEqual(component.labelSelect);
    });
  });
  describe('handlerButton', () => {
    it('should emit data ', () => {
      const expected = '';
      const spy = jest.spyOn(component.statusFilter, 'emit');
      component.handlerButton(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
  describe('handlerSelect', () => {
    it('should emit data ', () => {
      const expected = '';
      const spy = jest.spyOn(component.categorySelected, 'emit');
      component.handlerSelect(expected);
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });
});
