import { CommonModule, formatDate } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialCustomModule } from 'src/app/shared/material-custom/material-custom.module';

import { TimePickerComponent } from './time-picker.component';

describe('TimePickerComponent', () => {
  let component: TimePickerComponent;
  let fixture: ComponentFixture<TimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerComponent ],
      imports: [
        CommonModule,
        MaterialCustomModule,
        FormsModule
      ],
      providers: [
        Renderer2
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addHour', () => {
    it('should emit hour', () => {
      const spy = jest.spyOn(component.getHour, 'emit');
      component.addHour(12);
      expect(spy).toHaveBeenCalledWith(12);
    })
  })

  describe('addMinute', () => {
    it('should emit minute', () => {
      const spy = jest.spyOn(component.getMinute, 'emit');
      component.addMinute(12);
      expect(spy).toHaveBeenCalledWith(12);
    })
  })

  describe('addTimeNow', () => {
    it('should emit hour and time now', () => {
      const spyHour = jest.spyOn(component.getHour, 'emit');
      const spyTime = jest.spyOn(component.getMinute, 'emit');
      let timeNow = formatDate(new Date(), 'HH:mm', 'en-US', '+7');
      const hour = timeNow.slice(0,2);
      const time = timeNow.slice(3,5);
      component.addTimeNow();
      expect(spyHour).toHaveBeenCalledWith(hour);
      expect(spyTime).toHaveBeenCalledWith(time);
    })
  })

  describe('renderer', () => {
    test.skip('should return false', () => {
      const event: Event = new MouseEvent('click');
      component.toggleButton.nativeElement = 'test';
      window.dispatchEvent(event);
    })
  })

  describe('getHours', () => {
    it('should return time when minute != ""', () => {
      component.time.minute = "00";
      component.getHours(12);
      expect(component.time.hour).toEqual('12:');
    })

    it('should return time when minute == ""', () => {
      component.time.minute = "";
      component.getHours(12);
      expect(component.time.hour).toEqual('12:');
      expect(component.time.minute).toEqual('00');
    })
  })

  describe('getMinutes', () => {
    it('should return time when hour != ""', () => {
      component.time.hour = "12:";
      component.getMinutes(12);
      expect(component.time.hour).toEqual("12:");
      expect(component.time.minute).toEqual("12");
    })

    it('should return time when hour == ""', () => {
      component.time.hour = "";
      component.getMinutes(12);
      expect(component.time.hour).toEqual("00:");
      expect(component.time.minute).toEqual("12");
    })
  })

  describe('getTimeNowTest', () => {
    it('should return time', () => {
      const time = formatDate(new Date(), "HH:mm", 'en-US', '+7');
      const hour = time.slice(0,3);
      const minute = time.slice(3,5);
      component.getTimeNowTest();
      expect(component.time.hour).toEqual(hour);
      expect(component.time.minute).toEqual(minute);
    })
  })

  describe('getStringTime', () => {
    it('should emit hour and time when input valid', () => {
      const event = {
        target: { value: '12:12' }
      }
      const spyHour = jest.spyOn(component.getHour, 'emit');
      const spyTime = jest.spyOn(component.getMinute, 'emit');
      component.getStringTime(event);
      expect(spyHour).toHaveBeenCalledWith('12');
      expect(spyTime).toHaveBeenCalledWith('12');
    })

    it('should alert notification when input unvalid', () => {
      const event = {
        target: { value: '12:12aa' }
      }
      const expected = 'Vui lòng nhập lại';
      const spy = spyOn(window, 'alert');
      component.getStringTime(event);
      expect(spy).toHaveBeenCalledWith(expected);
    })
  })

  describe('toggleMenu', () => {
    it('should return !showed', () => {
      component.showed = true;
      component.toggleMenu();
      expect(component.showed).toEqual(false);
    })
  })
});
