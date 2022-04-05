import { addWeeks, subDays, addDays, format, addMonths } from 'date-fns';
import { Equipment } from './../../../store/models/add-schedule.i';
import { Category } from 'src/app/store/models/category.i';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectMultipleSearchModule } from './../select-multiple-search/select-multiple-search.module';
import { TextareaModule } from './../textarea/textarea.module';
import { DatePickerModule } from './../date-time-picker/date-picker/date-picker.module';
import { SelectModule } from './../select/select.module';
import { LabelModule } from './../label/label.module';
import { ButtonModule } from './../button/button.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduleComponent } from './add-schedule.component';
import { TimePickerModule } from '../date-time-picker/time-picker/time-picker.module';

describe('AddScheduleComponent', () => {
  let component: AddScheduleComponent;
  let fixture: ComponentFixture<AddScheduleComponent>;

  let selectUserIds: Category[] = [
    {
      categoryName: 'user 1',
      categoryId: 1,
    },
    {
      categoryName: 'user 2',
      categoryId: 2,
    },
  ];
  let equipments: Equipment[] = [
    {
      equipmentId: 1,
      timeStart: new Date('2020/10/10'),
      timeDue: new Date('2020/10/10'),
    },
    {
      equipmentId: 2,
      timeStart: new Date('2020/10/10'),
      timeDue: new Date('2020/10/10'),
    },
  ];
  let praticipants = [1, 2];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddScheduleComponent],
      imports: [
        SharedModule,
        FormsModule,
        ButtonModule,
        LabelModule,
        SelectModule,
        TimePickerModule,
        DatePickerModule,
        TextareaModule,
        SelectMultipleSearchModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScheduleComponent);
    component = fixture.componentInstance;
    component.equipments = equipments;
    component.selectUserIds = selectUserIds;
    component.dateStart = '2020/10/10';
    component.hourStart = '10';
    component.minuteStart = '10';
    component.dateEnd = '2021/11/11';
    component.hourEnd = '11';
    component.minuteEnd = '11';
    component.praticipants = praticipants;
    component.titleSchedule = 'title';
    component.description = 'description';
    component.important = 'low';
    (component.location = 'f3'), (component.typeSchedule = '16');
    component.typeRepeat = 'normal';
    component.endDate = '2020/10/10';
    component.valueRepeat = 'value repeat';
    component.hourStartRepeat = '6';
    component.minuteStartRepeat = '60';
    component.hourEndRepeat = '16';
    component.minuteEndRepeat = '30';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('cancel', () => {
    it('should return success', () => {
      //arrange
      let expected = '/schedule';
      fixture.detectChanges();
      const spy = jest.spyOn(component.addCancel, 'emit');
      //act
      component.cancel();
      //assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('submit', () => {
    it('should return value with typeRepeat = normal', () => {
      //arrange
      let expected = {
        title: 'title',
        description: 'description',
        important: 'low',
        place: 'f3',
        userIds: [1, 2],
        equipmentName: [
          {
            equipmentId: 1,
            timeStart: new Date('2020/10/10'),
            timeDue: new Date('2020/10/10'),
          },
          {
            equipmentId: 2,
            timeStart: new Date('2020/10/10'),
            timeDue: new Date('2020/10/10'),
          },
        ],
        scheduleCategoryId: 16,
        typeRepeat: 'normal',
        timeStart: new Date('2020/10/10 10:10'),
        dueDate: new Date('2021/11/11 11:11'),
      };
      component.typeRepeat = 'normal';
      fixture.detectChanges();
      const spy = jest.spyOn(component.addSubmit, 'emit');
      //act
      component.submit();
      //assert
      expect(spy).toHaveBeenCalledWith(expected);
    });

    it('should return value with typeRepeat != normal', () => {
      //arrange
      let value = new Date('2020/10/10');
      let expected = {
        title: 'title',
        description: 'description',
        timeStartRepeat: '6:60:00',
        timeDueRepeat: '16:30:00',
        timeStart: value,
        important: 'low',
        place: 'f3',
        userIds: [1, 2],
        equipmentName: [
          {
            equipmentId: 1,
            timeStart: new Date('2020/10/10'),
            timeDue: new Date('2020/10/10'),
          },
          {
            equipmentId: 2,
            timeStart: new Date('2020/10/10'),
            timeDue: new Date('2020/10/10'),
          },
        ],
        scheduleCategoryId: 16,
        typeRepeat: '!normal',
        dueDate: new Date('2020/10/10'),
        valueRepeat: 'value repeat',
      };
      component.typeRepeat = '!normal';
      jest.spyOn(component, 'calRealStartTime').mockReturnValue(value);
      fixture.detectChanges();
      const spy = jest.spyOn(component.addSubmit, 'emit');
      //act
      component.submit();
      //assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('calRealStartTime', () => {
    it('should return value with typeRepeat = weekly and newDate >= value Repeat', () => {
      //arrange
      component.typeRepeat = 'weekly';
      component.valueRepeat = '1';
      let rangeDay = Math.abs(
        new Date().getDay() - Number(component.valueRepeat)
      );
      fixture.detectChanges();
      let expected = addWeeks(subDays(new Date(), rangeDay), 1);
      //act
      const value = component.calRealStartTime();
      //assert
      expect(format(value, "yyyy-MM-dd'T'HH:mm")).toEqual(
        format(expected, "yyyy-MM-dd'T'HH:mm")
      );
    });

    it('should return value with typeRepeat = weekly and newDate < value Repeat', () => {
      //arrange
      component.typeRepeat = 'weekly';
      component.valueRepeat = '30';
      let rangeDay = Math.abs(
        new Date().getDay() - Number(component.valueRepeat)
      );
      fixture.detectChanges();
      let expected = addDays(new Date(), rangeDay);
      //act
      const value = component.calRealStartTime();
      //assert
      expect(format(value, "yyyy-MM-dd'T'HH:mm")).toEqual(
        format(expected, "yyyy-MM-dd'T'HH:mm")
      );
    });

    it('should return value with typeRepeat = monthly and newDate < value Repeat', () => {
      //arrange
      component.typeRepeat = 'monthly';
      component.valueRepeat = '28';
      let rangeDay = Math.abs(
        new Date().getDate() - Number(component.valueRepeat)
      );
      fixture.detectChanges();
      let expected = addDays(new Date(), rangeDay);
      //act
      const value = component.calRealStartTime();
      //assert
      expect(format(value, "yyyy-MM-dd'T'HH:mm")).toEqual(
        format(expected, "yyyy-MM-dd'T'HH:mm")
      );
    });

    it('should return value with typeRepeat = monthly and newDate >= value Repeat', () => {
      //arrange
      component.typeRepeat = 'monthly';
      component.valueRepeat = '1';
      let rangeDay = Math.abs(
        new Date().getDate() - Number(component.valueRepeat)
      );
      fixture.detectChanges();
      let expected = addMonths(subDays(new Date(), rangeDay), 1);
      //act
      const value = component.calRealStartTime();
      //assert
      expect(format(value, "yyyy-MM-dd'T'HH:mm")).toEqual(
        format(expected, "yyyy-MM-dd'T'HH:mm")
      );
    });

    it('should return value with typeRepeat != weekly and monthly', () => {
      //arrange
      component.typeRepeat = 'nor';
      fixture.detectChanges();
      //act
      const value = component.calRealStartTime();
      //assert
      expect(format(value, "yyyy-MM-dd'T'HH:mm")).toEqual(
        format(new Date(), "yyyy-MM-dd'T'HH:mm")
      );
    });
  });

  describe('checkParticipant', () => {
    it('should return success', () => {
      //arrange
      let expected = {
        startTime: new Date('2020/10/10 10:10'),
        dueTime: new Date('2021/11/11'),
        equipmentId: [1, 2],
      };
      fixture.detectChanges();
      const spy = jest.spyOn(component.checkFreeTimePraticipant, 'emit');
      //act
      component.checkParticipant();
      //assert
      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe('checkEquipment', () => {
    it('should return value with typeRepeat = normal', () => {
      //arrange
      let expected = {
        startTime: new Date('2020/10/10 10:10'),
        dueTime: new Date('2021/11/11 11:11'),
        equipmentId: [1, 2],
      };
      const spy = jest.spyOn(component.checkFreeTimeEquipment, 'emit');
      component.typeRepeat = 'normal';
      fixture.detectChanges();
      //act
      component.checkEquipment();
      //assert
      expect(spy).toHaveBeenCalledWith(expected);
    });

    it('should return value with typeRepeat != normal', () => {
      //arrange
      const spy = jest.spyOn(component.checkFreeTimeEquipment, 'emit');
      component.typeRepeat = '!normal';
      fixture.detectChanges();
      //act
      component.checkEquipment();
      //assert
      expect(spy).toHaveBeenCalledWith({
        startTime: new Date(),
        dueTime: new Date('2020/10/10'),
        equipmentId: [1, 2],
      });
    });
  });

  describe('getStartHour', () => {
    it('should return success', () => {
      //arrange
      let expected = '10';
      //act
      component.getStartHour(expected);
      //assert
      expect(component.hourStart).toEqual(expected);
    });
  });

  describe('getStartMinute', () => {
    it('should return success', () => {
      //arrange
      let expected = '10';
      //act
      component.getStartMinute(expected);
      //assert
      expect(component.minuteStart).toEqual(expected);
    });
  });

  describe('getStartDate', () => {
    it('should return success', () => {
      //arrange
      let expected = '10';
      //act
      component.getStartDate(expected);
      //assert
      expect(component.dateStart).toEqual(expected);
    });
  });

  describe('getEndHour', () => {
    it('should return success', () => {
      //arrange
      let expected = '10';
      //act
      component.getEndHour(expected);
      //assert
      expect(component.hourEnd).toEqual(expected);
    });
  });

  describe('getEndMinute', () => {
    it('should return success', () => {
      //arrange
      let expected = '10';
      //act
      component.getEndMinute(expected);
      //assert
      expect(component.minuteEnd).toEqual(expected);
    });
  });

  describe('getEndDate', () => {
    it('should return success', () => {
      //arrange
      let expected = '10';
      //act
      component.getEndDate(expected);
      //assert
      expect(component.dateEnd).toEqual(expected);
    });
  });

  describe('getStartHourRepeat', () => {
    it('should return success', () => {
      //arrange
      let expected = '10';
      //act
      component.getStartHourRepeat(expected);
      //assert
      expect(component.hourStartRepeat).toEqual(expected);
    });
  });

  describe('getStartMinuteRepeat', () => {
    it('should return success', () => {
      //arrange
      let expected = '10';
      //act
      component.getStartMinuteRepeat(expected);
      //assert
      expect(component.minuteStartRepeat).toEqual(expected);
    });
  });

  describe('getEndHourRepeat', () => {
    it('should return success', () => {
      //arrange
      let expected = '10';
      //act
      component.getEndHourRepeat(expected);
      //assert
      expect(component.hourEndRepeat).toEqual(expected);
    });
  });

  describe('getEndMinuteRepeat', () => {
    it('should return success', () => {
      //arrange
      let expected = '10';
      //act
      component.getEndMinuteRepeat(expected);
      //assert
      expect(component.minuteEndRepeat).toEqual(expected);
    });
  });

  describe('chooseEquipment', () => {
    let selectEquipmentFake: Category[] = [
      {
        categoryName: 'laptop',
        categoryId: 1,
      },
      {
        categoryName: 'micro',
        categoryId: 2,
      },
      {
        categoryName: 'projector ',
        categoryId: 3,
      },
      {
        categoryName: 'TV',
        categoryId: 4,
      },
    ];

    let equipments = [1, 2];

    beforeEach(() => {
      component.equipments = [];
      component.selectEquipment = selectEquipmentFake;
      fixture.detectChanges();
    });

    it('should return value when typeRepeat = normal', () => {
      //arrange
      component.dateStart = '2020/10/10';
      component.hourStart = '10';
      component.minuteStart = '10';

      component.dateEnd = '2020/10/10';
      component.hourEnd = '10';
      component.minuteEnd = '10';
      let expectedArray = [
        {
          equipmentId: 1,
          timeStart: new Date('2020/10/10 10:10'),
          timeDue: new Date('2020/10/10 10:10'),
        },
        {
          equipmentId: 2,
          timeStart: new Date('2020/10/10 10:10'),
          timeDue: new Date('2020/10/10 10:10'),
        },
      ];

      component.typeRepeat = 'normal';
      let expected = 'laptop,micro';
      fixture.detectChanges();
      //act
      component.chooseEquipment(equipments);
      //assert
      expect(component.equipmentsString).toEqual(expected);
      expect(component.equipments).toEqual(expectedArray);
    });

    it('should return value when typeRepeat != normal', () => {
      //arrange
      component.typeRepeat = '!normal';
      let expected = 'laptop,micro';
      fixture.detectChanges();
      //act
      component.chooseEquipment(equipments);
      //assert
      expect(component.equipmentsString).toEqual(expected);
    });
  });

  describe('choosePraticipant', () => {
    it('should return success', () => {
      //arrange
      let selectUserIds: Category[] = [
        {
          categoryName: 'user 1',
          categoryId: 1,
        },
        {
          categoryName: 'user 2',
          categoryId: 2,
        },
      ];

      let praticipants: number[] = [1, 2];
      let expected = 'user 1,user 2';
      component.selectUserIds = selectUserIds;
      fixture.detectChanges();
      //act
      component.choosePraticipant(praticipants);
      //assert
      expect(component.praticipants).toEqual(praticipants);
      expect(component.praticipantsString).toEqual(expected);
    });
  });

  describe('chooseTypeSchedule', () => {
    it('should return success ', () => {
      //arrange
      let expected = 'value';
      //act
      component.chooseTypeSchedule(expected);
      //assert
      expect(component.typeSchedule).toEqual(expected);
    });
  });

  describe('chooseImportant', () => {
    it('should return success ', () => {
      //arrange
      let expected = 'value';
      //act
      component.chooseImportant(expected);
      //assert
      expect(component.important).toEqual(expected);
    });
  });

  describe('getDescription', () => {
    it('should return success ', () => {
      //arrange
      let expected = 'value';
      //act
      component.getDescription(expected);
      //assert
      expect(component.description).toEqual(expected);
    });
  });

  describe('changeRadio', () => {
    it('should return value with repeat = normal ', () => {
      //arrange
      component.repeat = 'normal';
      fixture.detectChanges();
      //act
      component.changeRadio();
      //assert
      expect(component.equipmentsString).toEqual('');
      expect(component.praticipantsString).toEqual('');
      expect(component.equipments).toEqual([]);
      expect(component.showRepeat).toEqual(false);
      expect(component.typeRepeat).toEqual('normal');
      expect(component.valueRepeat).toEqual('');
    });

    it('should return value with repeat != normal ', () => {
      //arrange
      component.repeat = '!normal';
      fixture.detectChanges();
      //changeRadio
      component.changeRadio();
      //assert
      expect(component.equipmentsString).toEqual('');
      expect(component.praticipantsString).toEqual('');
      expect(component.equipments).toEqual([]);
      expect(component.showRepeat).toEqual(true);
      expect(component.typeRepeat).toEqual('everyday');
      expect(component.valueRepeat).toEqual('everyday');
    });
  });

  describe('chooseTypeSchedule', () => {
    it('should return success ', () => {
      //arrange
      let expected = 'value';
      //act
      component.chooseTypeSchedule(expected);
      //assert
      expect(component.typeSchedule).toEqual(expected);
    });
  });

  describe('chooseWeekly', () => {
    it('should return success ', () => {
      //arrange
      let expected = 'value';
      //act
      component.chooseWeekly(expected);
      //assert
      expect(component.weekly).toEqual(expected);
      expect(component.valueRepeat).toEqual(expected);
      expect(component.typeRepeat).toEqual('weekly');
    });
  });

  describe('chooseMonthly', () => {
    it('should return success ', () => {
      //arrange
      let expected = 'value';
      //act
      component.chooseMonthly(expected);
      //assert
      expect(component.monthly).toEqual(expected);
      expect(component.valueRepeat).toEqual(expected);
      expect(component.typeRepeat).toEqual('monthly');
    });
  });

  describe('getRepeatDate', () => {
    it('should return success ', () => {
      //arrange
      let expected = 'value';
      //act
      component.getRepeatDate(expected);
      //assert
      expect(component.endDate).toEqual(expected);
    });
  });

  describe('changeRadioRepeat', () => {
    beforeEach(() => {
      component.weekly = 'weeklyTest';
      component.monthly = 'monthlyTest';
      fixture.detectChanges();
    });

    it('should return value when typeRepeat = weekly ', () => {
      //arrange
      component.typeRepeat = 'weekly';
      fixture.detectChanges();
      //act
      component.changeRadioRepeat();
      //assert
      expect(component.valueRepeat).toEqual(component.weekly);
    });

    it('should return value when typeRepeat = monthly ', () => {
      //arrange
      component.typeRepeat = 'monthly';
      fixture.detectChanges();
      //act
      component.changeRadioRepeat();
      //assert
      expect(component.valueRepeat).toEqual(component.monthly);
    });

    it('should return value when typeRepeat = default ', () => {
      //arrange
      component.typeRepeat = 'day';
      fixture.detectChanges();
      //act
      component.changeRadioRepeat();
      //assert
      expect(component.valueRepeat).toEqual('everyday');
    });
  });
});
