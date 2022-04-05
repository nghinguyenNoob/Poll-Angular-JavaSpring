import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReminderNotification } from './../../../store/models/reminder-notification.i';
import { MaterialCustomModule } from './../../material-custom/material-custom.module';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { PopUpComponent } from './pop-up.component';
import { By } from '@angular/platform-browser';
describe('PopUpComponent', () => {
  let component: PopUpComponent;
  let fixture: ComponentFixture<PopUpComponent>;

  let reminderNotification: ReminderNotification = {
    eventId: 1,
    eventViewPath: 'test',
    eventTypeId: 1,
    notificationDescription: 'test',
    notificationTitle: 'test',
    notificationId: 1,
    categoryName : 'test',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpComponent],
      imports: [MaterialCustomModule, BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpComponent);
    component = fixture.componentInstance;
    component.reminder = reminderNotification;
    component.temp = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Init', () => {
    beforeEach(() => {});

    it('should return success', () => {
      // arrange
      let value = fixture.debugElement.nativeElement.querySelector('h3');
      // act
      // assert
      expect(component.reminder.categoryName).toEqual(value.textContent.split(' ')[1]);
    });
  });

  describe('marked Readed', () => {
    beforeEach(() => {});

    it('should return success', fakeAsync(() => {
      // arrange
      let expected = {
        isRead: true,
        notificationId: component.reminder.notificationId,
      };
      // act
      const spy = jest.spyOn(component.markAsRead, 'emit');
      component.markedReaded();
      tick();
      // assert
      expect(spy).toHaveBeenCalledWith(expected);
      expect(component.notification.nativeElement.style.display).toEqual(
        'none'
      );
    }));
  });

  describe('cancelNotification', () => {
    beforeEach(() => {});

    it('should return success', () => {
      // arrange
      component.cancelNotification();
      // assert
      expect(component.notification.nativeElement.style.display).toEqual(
        'none'
      );
    });
  });

  describe('readDetailNotification', () => {
    beforeEach(() => {});

    it('should return success', () => {
      // arrange
      const spy = jest.spyOn(component.readDetail, 'emit');
      component.readDetailNotification();
      // assert
      expect(spy).toHaveBeenCalledWith();
    });
  });

  describe('getValueNotification', () => {
    beforeEach(() => {});

    it('should return success when eventTypeId = 1', () => {
      // arrange
      const data = component.getValueNotification();
      let expected = 'Schedule: Meeting/ test Start at undefined';
      // assert
      expect(data).toEqual(expected);
    });

    it('should return success when eventTypeId = 2', () => {
      // arrange
      component.reminder = { ...reminderNotification, eventTypeId: 2 };
      const data = component.getValueNotification();
      let expected = 'Todo: test Deadline at: undefined';
      // assert
      expect(data).toEqual(expected);
    });

    it('should return success when eventTypeId = default', () => {
      // arrange
      component.reminder = { ...reminderNotification, eventTypeId: 3 };
      const data = component.getValueNotification();
      let expected = '/Event type name/: test/undefined';
      // assert
      expect(data).toEqual(expected);
    });
  });
});
