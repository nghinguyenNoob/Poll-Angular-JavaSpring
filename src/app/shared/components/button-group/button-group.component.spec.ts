import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonGroupComponent } from './button-group.component';
import { IButtonGroup } from './../../../store/models/button-group.i';
import {
  MatButtonToggle,
  MatButtonToggleChange,
} from '@angular/material/button-toggle';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ScheduleListComponent', () => {
  let component: ButtonGroupComponent;
  let fixture: ComponentFixture<ButtonGroupComponent>;
  const options: IButtonGroup<string>[] = [
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
  const valueButton = [];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonGroupComponent],
      imports: [],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('change', () => {
    it('should return value all when click All ', () => {
      // arrange
      let source: MatButtonToggle;
      let event: MatButtonToggleChange = {
        source: source,
        value: 'all',
      };
      component.buttonGroup = options;

      //get value from all button
      fixture.detectChanges();
      const guardianGroupToggle = fixture.debugElement.nativeElement.querySelector(
        '[data-test=submit-action]'
      );
      const guardianButtonToggles = Array.from(
        guardianGroupToggle.getElementsByTagName('mat-button-toggle')
      );
      guardianButtonToggles.forEach((a: HTMLElement) =>
        valueButton.push(a['value'])
      );
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      // act
      component.change(event);
      // assert
      expect(valueButton[0]).toEqual(event.value);
      expect(spy).toHaveBeenCalledWith('all');
    });
    it('should return value read when click Already Read ', () => {
      // arrange
      let source: MatButtonToggle;
      let event: MatButtonToggleChange = {
        source: source,
        value: 'read',
      };
      component.buttonGroup = options;
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      // act
      component.change(event);
      // assert
      expect(valueButton[1]).toEqual(event.value);
      expect(spy).toHaveBeenCalledWith(event.value);
    });
    it('should return value unread when click Unread ', () => {
      // arrange
      let source: MatButtonToggle;
      let event: MatButtonToggleChange = {
        source: source,
        value: 'unread',
      };
      component.buttonGroup = options;
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      // act
      component.change(event);
      // assert
      expect(valueButton[2]).toEqual(event.value);
      expect(spy).toHaveBeenCalledWith(event.value);
    });
    it('should return value remove when click Remove ', () => {
      // arrange
      let source: MatButtonToggle;
      let event: MatButtonToggleChange = {
        source: source,
        value: 'remove',
      };
      component.buttonGroup = options;
      const spy = jest.spyOn(component.valueButtonGroup, 'emit');
      // act
      component.change(event);
      // assert
      expect(valueButton[3]).toEqual(event.value);
      expect(spy).toHaveBeenCalledWith(event.value);
    });
  });
});
