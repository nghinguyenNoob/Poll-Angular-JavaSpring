import { ScheduleDetail } from './../../../store/models/schedule.i';
import { ButtonModule } from './../button/button.module';
import { LabelModule } from './../label/label.module';
import { FormsModule } from '@angular/forms';
import { MaterialCustomModule } from './../../material-custom/material-custom.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDetailComponent } from './schedule-detail.component';

describe('ScheduleDetailComponent', () => {
  let component: ScheduleDetailComponent;
  let fixture: ComponentFixture<ScheduleDetailComponent>;

  let scheduleDetail: ScheduleDetail = {
    scheduleId: '',
    title: '',
    description: '',
    startDate: '2020-11-13T11:03:00.000Z',
    dueDate: '2020-11-13T11:03:00.000Z',
    timeDueRepeat: '',
    timeStartRepeat: '',
    createBy: '',
    createdByName: '',
    createByFullName: '',
    scheduleCategoryId: '',
    scheduleCategoryName: '',
    created: '',
    modified: '',
    place: '',
    important: '',
    equipmentNames: '',
    type: '',
    valueRepeat: '',
    userNames: '',
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleDetailComponent],
      imports: [MaterialCustomModule, FormsModule, LabelModule, ButtonModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDetailComponent);
    component = fixture.componentInstance;
    component.scheduleDetail = scheduleDetail;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Init', () => {
    let scheduleDetail: ScheduleDetail = {
      scheduleId: '12',
      title: 'Schedule detail',
      description: 'description',
      startDate: '',
      dueDate: '',
      timeDueRepeat: '14:30',
      timeStartRepeat: '15:30',
      createBy: '1',
      createdByName: 'nghia',
      scheduleCategoryId: '15',
      scheduleCategoryName: 'meeting',
      created: '2020-01-01',
      modified: '2020-01-01',
      place: 'F4',
      important: 'Hight',
      equipmentNames: '',
      type: 'Normal',
      valueRepeat: '',
      userNames: 'nghia nghia',
      createByFullName: 'thi'
    };
    beforeEach(() => {
      component.scheduleDetail = scheduleDetail;
      component.typeCheck = true;
      component.scheduleTime = 'Tuesday, November 10, 11:59 AM - 12:50 PM';
      fixture.detectChanges();
    });

    it('should return when typeCheck = true', () => {
      // arrange
      const value = fixture.debugElement.nativeElement.querySelectorAll('p');
      // act
      // assert
      expect(value[0].innerHTML).toEqual(` ${component.scheduleDetail.scheduleCategoryName}: ${component.scheduleDetail.title} `);
      expect(value[2].innerHTML).toEqual(` ${component.scheduleDetail.createByFullName} | ${component.scheduleDetail.created} `);
      expect(value[4].innerHTML).toEqual(component.scheduleTime);
      expect(value[6].innerHTML).toEqual(component.scheduleDetail.title);
      expect(value[8].innerHTML).toEqual(component.scheduleDetail.place);
      expect(value[10].innerHTML).toEqual(component.scheduleDetail.important);
      expect(value[12].innerHTML).toEqual(component.scheduleDetail.userNames);
      expect(value[14].innerHTML).toEqual(component.scheduleDetail.equipmentNames);
      expect(value[16].innerHTML).toEqual(component.scheduleDetail.description);
    });

    it('should return when typeCheck = false', () => {
      // arrange
      component.typeCheck = false;
      component.scheduleTimeRepeat = '1 day';
      fixture.detectChanges();
      const value = fixture.debugElement.nativeElement.querySelectorAll('p');
      // act
      // assert
      expect(value[0].innerHTML).toEqual(` ${component.scheduleDetail.scheduleCategoryName}: ${component.scheduleDetail.title} `);
      expect(value[2].innerHTML).toEqual(` ${component.scheduleDetail.createByFullName} | ${component.scheduleDetail.created} `);
      expect(value[4].innerHTML).toEqual(` ${component.scheduleTimeRepeat} at ${component.scheduleDetail.timeStartRepeat}-${component.scheduleDetail.timeDueRepeat} `);
      expect(value[6].innerHTML).toEqual(component.scheduleDetail.dueDate);
      expect(value[8].innerHTML).toEqual(component.scheduleDetail.title);
      expect(value[10].innerHTML).toEqual(component.scheduleDetail.place);
      expect(value[12].innerHTML).toEqual(component.scheduleDetail.important);
      expect(value[14].innerHTML).toEqual(component.scheduleDetail.userNames);
      expect(value[16].innerHTML).toEqual(component.scheduleDetail.equipmentNames);
      expect(value[18].innerHTML).toEqual(component.scheduleDetail.description);
    });
  });

  describe('clickButton', () => {
    beforeEach(() => {});

    it('should return success', () => {
      // arrange
      const spy = jest.spyOn(component.btnClickEmt, 'emit');
      // act
      component.clickButton();
      // assert
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('checkInDate', () => {
    beforeEach(() => {
    });

    it('should return when startDate === dueDate', () => {
      // arrange
      let expected = '06:03 PM';
      // act
      component.checkInDate();
      // assert
      expect(component.scheduleDetail.dueDate).toEqual(expected);
    })

    it('should return when startDate !== dueDate', () => {
      // arrange
      let expected = {...scheduleDetail,dueDate:'2020-12-13T00:00:00.000Z'};
      component.scheduleDetail = {...scheduleDetail,dueDate:'2020-12-13T00:00:00.000Z'};
      fixture.detectChanges();
      // act
      component.checkInDate();
      // assert
      expect(component.scheduleDetail).toEqual(expected);
    })
  })
});
