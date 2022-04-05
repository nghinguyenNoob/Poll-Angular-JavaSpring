import { CommonModule } from '@angular/common';
import { ElementRef, Renderer2, RendererFactory2, Type } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CLICK } from '@storybook/addon-knobs';
import { DAYS_OF_WEEK } from 'angular-calendar';
import { cpuUsage } from 'process';
import { MaterialCustomModule } from 'src/app/shared/material-custom/material-custom.module';

import { DatePickerComponent } from './date-picker.component';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;
  let renderer: Renderer2;
  let el: ElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerComponent ],
      imports: [ CommonModule, MaterialCustomModule, FormsModule ],
      providers: [Renderer2]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    component.listMonthText = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('renderer', () => {
    test.skip('should return false', () => {
      component.showed = true;
      const renderer = fixture.componentRef.injector.get(Renderer2);
      jest.spyOn(component.toggleButton.nativeElement, 'contains').mockReturnValue(true);
      spyOn(renderer, 'listen');
      const event: Event = new MouseEvent('click', window);
      window.dispatchEvent(event);
      expect(component.showed).toEqual(false);
    })
  })

  describe('ngOnInit', () => {
    it('date validity', done => {
      component.value = '10-10-2020';
      const expected = new Date(component.value);
      component.ngOnInit();
      expect(component.year).toEqual(expected.getFullYear());
      expect(component.month).toEqual(expected.getMonth());
      expect(component.dayOfMonth).toEqual(expected.getDate());
      expect(component.txtMonthYear).toEqual(component.listMonthText[component.month] + '   ' + component.year);
      done();
    })

    it('date unvalidity', done => {
      component.value = '';
      const expected = new Date();
      component.ngOnInit();
      expect(component.year).toEqual(expected.getFullYear());
      expect(component.month).toEqual(expected.getMonth());
      expect(component.dayOfMonth).toEqual(expected.getDate());
      expect(component.txtMonthYear).toEqual(component.listMonthText[component.month] + '   ' + component.year);
      done();
    })
  })

  describe('getNow', () => {
    it('getDate emit', done => {
      const expected = component.dateFormat(new Date);
      const spy = jest.spyOn(component.getDate, 'emit');
      component.getNow();
      expect(spy).toHaveBeenCalledWith(expected);
      done();
    })
  })

  describe('onchange', () => {
    it('getDate emit when value unvalidity', done => {
      component.value = '';
      const expected = '';
      const spy = jest.spyOn(component.getDate, 'emit');
      component.onchange();
      expect(spy).toHaveBeenCalledWith(expected);
      done();
    })

    it('getDate emit when value validity', done => {
      component.value = '10-10-2020';
      const expected = '10-10-2020';
      const spy = jest.spyOn(component.getDate, 'emit');
      component.onchange();
      expect(spy).toHaveBeenCalledWith(expected);
      done();
    })
  })

  describe('getDayOfMonth', () => {
    it('should return length listWeek = 6 when month = 2 and year = 2020', () => {
      component.year = 2020;
      component.getDayOfMonth(1);
      expect(component.listWeek.length).toEqual(5);
    })

    it('should return length listWeek = 6 when month = 2 and year = 2019', () => {
      component.year = 2019;
      component.getDayOfMonth(1);
      expect(component.listWeek.length).toEqual(5);
    })
  })

  describe('getYear', () => {
    it('list have 20 year', done => {
      component.listYear = [2020,2021,2022];
      component.minYear = 2010;
      component.maxYear = 2030;
      component.getYear();
      expect(component.listYear.length).toEqual(20);
      done();
    })
  })

  describe('getMonth', () => {
    it('listMonth than more 1', () => {
      component.listMonth = ['Jan', 'Feb'];
      const spy = jest.spyOn(component, 'getYear');
      component.getMonth();
      expect(spy).toHaveBeenCalled();
    })

    it('listMonth than less 1', () => {
      const expected = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      component.listMonth = [];
      component.year = 2020;
      component.getMonth();
      expect(component.txtMonthYear).toEqual('2020');
      expect(component.listMonth).toEqual(expected);
    })
  })

  describe('chooseYear', () => {
    it('get month to call', () => {
      const expected = 2020;
      const spy = jest.spyOn(component, 'getMonth');
      component.chooseYear(2020);
      expect(component.year).toEqual(expected);
      expect(spy).toHaveBeenCalled();
    })
  })

  describe('chooseMonth', () => {
    it('getDayOfMonth to call', () => {
      const spy = jest.spyOn(component, 'chooseMonth');
      component.chooseMonth(10);
      expect(component.month).toEqual(10);
      expect(spy).toHaveBeenCalledWith(10);
    })
  })

  describe('chooseDate', () => {
    it('getDate emit', () => {
      component.month = 10;
      component.year = 2020;
      const expected = '11/10/2020';
      const spy = jest.spyOn(component.getDate, 'emit');
      component.chooseDate(10);
      expect(component.date).toEqual(new Date(expected));
      expect(component.value).toEqual('2020-11-10');
      expect(spy).toHaveBeenCalledWith('2020-11-10');
    })
  })

  describe('checkActive', () => {
    it('check month true', () => {
      component.listMonth = ['1','2'];
      component.date = new Date('2020-10-10');
      component.year = 2020;
      expect(component.checkActive(9)).toEqual(true);
    })

    it('check month false', () => {
      component.listMonth = ['1','2'];
      component.date = new Date('2020-10-10');
      component.year = 2020;
      expect(component.checkActive(11)).toEqual(false);
    })

    it('check date true', () => {
      component.listMonth = [];
      component.date = new Date('2020-10-10');
      component.month = 9;
      expect(component.checkActive(10)).toEqual(true);
    })

    it('check date false', () => {
      component.listMonth = [];
      component.date = new Date('2020-10-10');
      component.month = 9;
      expect(component.checkActive(11)).toEqual(false);
    })
  })

  describe('next', () => {
    it('disable next when max year >= 2040', () => {
      component.listYear = [2001, 2020];
      component.minYear = 2010;
      component.maxYear = 2030;
      component.next();
      expect(component.disableNext).toEqual(true);
    })

    it('able next when max year <= 2040', () => {
      component.listYear = [2001, 2020];
      component.minYear = 2000;
      component.maxYear = 2020;
      component.next();
      expect(component.disableNext).toEqual(false);
    })

    it('getDayOfMonth when month < 11', () => {
      component.month = 1;
      const expected = 2;
      const spy = jest.spyOn(component, 'getDayOfMonth');
      component.next();
      expect(spy).toHaveBeenCalledWith(expected);
    })

    it('getDayOfMonth when month > 11 and year < 2040', () => {
      component.month = 12;
      component.year = 2020;
      const expected = 0;
      const spy = jest.spyOn(component, 'getDayOfMonth');
      component.next();
      expect(component.year).toEqual(2021);
      expect(component.disableNext).toEqual(false);
      expect(spy).toHaveBeenCalledWith(expected);
    })

    it('getDayOfMonth when month > 11 and year > 2040', () => {
      component.month = 12;
      component.year = 2040;
      const expected = 0;
      const spy = jest.spyOn(component, 'getDayOfMonth');
      component.next();
      expect(component.year).toEqual(2041);
      expect(component.disableNext).toEqual(true);
      expect(spy).toHaveBeenCalledWith(expected);
    })
  })

  describe('prevous', () => {
    it('disable prevous when min year <= 1960', () => {
      component.listYear = [2001, 2020];
      component.minYear = 1975;
      component.maxYear = 1995;
      component.prevous();
      expect(component.disablePrevous).toEqual(true);
    })

    it('able prevous when min year >= 1960', () => {
      component.listYear = [2001, 2020];
      component.minYear = 1985;
      component.maxYear = 1005;
      component.prevous();
      expect(component.disablePrevous).toEqual(false);
    })

    it('getDayOfMonth when month > 0', () => {
      component.month = 1;
      const expected = 0;
      const spy = jest.spyOn(component, 'getDayOfMonth');
      component.prevous();
      expect(spy).toHaveBeenCalledWith(expected);
    })

    it('getDayOfMonth when month < 0 and year > 1960', () => {
      component.month = 0;
      component.year = 2020;
      const expected = 11;
      const spy = jest.spyOn(component, 'getDayOfMonth');
      component.prevous();
      expect(component.year).toEqual(2019);
      expect(component.disablePrevous).toEqual(false);
      expect(spy).toHaveBeenCalledWith(expected);
    })

    it('getDayOfMonth when month < 0 and year < 1960', () => {
      component.month = 0;
      component.year = 1961;
      const expected = 11;
      const spy = jest.spyOn(component, 'getDayOfMonth');
      component.prevous();
      expect(component.year).toEqual(1960);
      expect(component.disablePrevous).toEqual(true);
      expect(spy).toHaveBeenCalledWith(expected);
    })
  })

  describe('dateFormat', () => {
    it('return date when month < 10', () => {
      const expected = '2020-02-10';
      expect(component.dateFormat(new Date('2/10/2020'))).toEqual(expected);
    })
  })

  describe('valiDate', () => {
    it('return false when date is unvalid', () => {
      expect(component.valiDate('10-20')).toEqual(false);
      expect(component.valiDate('10-20-2020-20')).toEqual(false);
    })
  })

  describe('toggleMenu', () => {
    it('log "demo"', () => {
      component.showed = true;
      component.toggleMenu();
      expect(component.showed).toEqual(false);
    })
  })  
});
