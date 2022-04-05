import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { ICheckBoxItem } from '../../../store/models/checkbox-item.i';
import { LabelInterface } from '../../../store/models/label.i';
import { LabelledValue } from '../../../store/models/labelvalue.i';
import { CheckFreeTime } from '../../../store/models/checkFreeTime.i';
import { AddSchedule, Equipment } from '../../../store/models/add-schedule.i';
import { Category } from '../../../store/models/category.i';
import { SelectMultipleSearchComponent } from '../select-multiple-search/select-multiple-search.component';
import { getDay, addWeeks, addMonths, addDays, subDays } from 'date-fns';

@Component({
  selector: 'brc-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss'],
})
export class AddScheduleComponent implements OnInit {
  @Input() selectTypeSchedule: LabelledValue<string>[];
  @Input() selectImportant: LabelledValue<string>[];
  @Input() selectWeekly: LabelledValue<string>[];
  @Input() selectMonthly: LabelledValue<string>[];
  @Input() selectUserIds: Category[];
  @Input() selectEquipment: Category[];

  @Output() checkFreeTimePraticipant: EventEmitter<
    CheckFreeTime
  > = new EventEmitter();
  @Output() checkFreeTimeEquipment: EventEmitter<
    CheckFreeTime
  > = new EventEmitter();
  @Output() addSubmit: EventEmitter<AddSchedule> = new EventEmitter();
  @Output() addCancel: EventEmitter<string> = new EventEmitter();
  @ViewChild('selectedEquipment')
  selectMultiple1: SelectMultipleSearchComponent;
  @ViewChild('selectedParticipant')
  selectMultiple2: SelectMultipleSearchComponent;
  public repeat = 'normal';
  public typeRepeat = 'normal';
  public weekly = '';
  public monthly = '';
  public endDate = '';
  public valueRepeat = '';
  public showRepeat = false;
  public hourStart = '20';
  public dateStart = '';
  public minuteStart = '11';
  public hourEnd = '20';
  public minuteEnd = '11';
  public dateEnd = '';
  public hourStartRepeat = '20';
  public minuteStartRepeat = '11';
  public hourEndRepeat = '20';
  public minuteEndRepeat = '11';
  public titleSchedule = '';
  public location = '';
  public typeSchedule;
  public important = '';
  public praticipants: number[] = [];
  public praticipantsString = '';
  public equipments: Equipment[] = [];
  public equipmentsString = '';
  public description = '';

  labelHeader: LabelInterface = {
    content: 'Add new schedule',
    size: 30,
    color: 'black',
    backgroundColor: 'while',
  };
  labelStartDate: LabelInterface = {
    content: 'Start date',
    size: 16,
    color: 'black',
    backgroundColor: 'while',
  };
  labelStartTime: LabelInterface = {
    content: 'Start time',
    size: 16,
    color: 'black',
    backgroundColor: 'while',
  };
  labelExprices: LabelInterface = {
    content: 'Exprices',
    size: 16,
    color: 'black',
    backgroundColor: 'while',
  };
  labelEndTime: LabelInterface = {
    content: 'End time',
    size: 16,
    color: 'black',
    backgroundColor: 'while',
  };
  labelTitle: LabelInterface = {
    content: 'Title',
    size: 16,
    color: 'black',
    backgroundColor: 'while',
  };
  labelLocation: LabelInterface = {
    content: 'Location',
    size: 16,
    color: 'black',
    backgroundColor: 'while',
  };
  labelDescription: LabelInterface = {
    content: 'Description',
    size: 16,
    color: 'black',
    backgroundColor: 'while',
  };

  buttonCheckTimePraticipant = {
    colorButton: 'primary',
    colorMouseOver: 'warn',
    colorMouseOut: 'primary',
    type: 'button',
    text: 'Check free time participant',
  };
  buttonCheckTimeEquipment = {
    colorButton: 'primary',
    colorMouseOver: 'warn',
    colorMouseOut: 'primary',
    type: 'button',
    text: 'Check free time equipment',
  };

  buttonAdd = {
    colorButton: 'primary',
    colorMouseOver: 'warn',
    colorMouseOut: 'primary',
    type: 'button',
    text: 'Add',
  };

  buttonCancel = {
    colorButton: 'warn',
    colorMouseOver: 'warn',
    colorMouseOut: 'primary',
    type: 'button',
    text: 'Cancel',
  };

  constructor() {}

  ngOnInit(): void {}

  cancel(): void {
    this.addCancel.emit('/schedule');
  }

  submit() {
    let schedule: AddSchedule;
    if (this.typeRepeat == 'normal') {
      schedule = {
        title: this.titleSchedule,
        description: this.description,
        timeStart: new Date(
          this.dateStart + ' ' + this.hourStart + ':' + this.minuteStart
        ),
        dueDate: new Date(
          this.dateEnd + ' ' + this.hourEnd + ':' + this.minuteEnd
        ),
        important: this.important,
        place: this.location,
        userIds: this.praticipants,
        equipmentName: this.equipments,
        scheduleCategoryId: Number.parseInt(this.typeSchedule),
        typeRepeat: this.typeRepeat,
      };
    } else {
      schedule = {
        title: this.titleSchedule,
        description: this.description,
        timeStartRepeat:
          this.hourStartRepeat + ':' + this.minuteStartRepeat + ':00',
        timeDueRepeat: this.hourEndRepeat + ':' + this.minuteEndRepeat + ':00',
        important: this.important,
        place: this.location,
        userIds: this.praticipants,
        equipmentName: this.equipments,
        scheduleCategoryId: Number.parseInt(this.typeSchedule),
        //TODO : add function to cal real start time with (typeRepeat adn valueRepeat)
        timeStart: this.calRealStartTime(),
        dueDate: new Date(this.endDate),
        typeRepeat: this.typeRepeat,
        valueRepeat: this.valueRepeat,
      };
    }
    this.addSubmit.emit(schedule);
  }
  calRealStartTime(): Date {
    let timeStart: Date;
    // check type repeat
    if (this.typeRepeat === 'weekly') {
      // timeStart = this.checkAfterWeekDay();
      const rangeDay = Math.abs(new Date().getDay() - Number(this.valueRepeat));
      if (new Date().getDay() >= Number(this.valueRepeat)) {
        timeStart = addWeeks(subDays(new Date(), rangeDay), 1);
      } else {
        timeStart = addDays(new Date(), rangeDay);
      }
    }
    if (this.typeRepeat === 'monthly') {
      const rangeDay = Math.abs(
        new Date().getDate() - Number(this.valueRepeat)
      );
      if (new Date().getDate() >= Number(this.valueRepeat)) {
        timeStart = addMonths(subDays(new Date(), rangeDay), 1);
      } else {
        timeStart = addDays(new Date(), rangeDay);
      }
    }
    return timeStart || new Date();
  }
  checkParticipant() {
    this.checkFreeTimePraticipant.emit({
      startTime: new Date(
        this.dateStart + ' ' + this.hourStart + ':' + this.minuteStart
      ),
      dueTime: new Date(this.dateEnd),
      equipmentId: this.praticipants,
    });
  }

  checkEquipment() {
    if (this.typeRepeat == 'normal') {
      this.checkFreeTimeEquipment.emit({
        startTime: new Date(
          this.dateStart + ' ' + this.hourStart + ':' + this.minuteStart
        ),
        dueTime: new Date(
          this.dateEnd + ' ' + this.hourEnd + ':' + this.minuteEnd
        ),
        equipmentId: this.equipments.map((item) => item.equipmentId),
      });
    } else {
      this.checkFreeTimeEquipment.emit({
        startTime: new Date(),
        dueTime: new Date(this.endDate),
        equipmentId: this.equipments.map((item) => item.equipmentId),
      });
    }
  }

  getStartHour(hour) {
    this.hourStart = hour;
  }

  getStartMinute(minute) {
    this.minuteStart = minute;
  }

  getStartDate(date) {
    this.dateStart = date;
  }

  getEndHour(hour) {
    this.hourEnd = hour;
  }

  getEndMinute(minute) {
    this.minuteEnd = minute;
  }

  getEndDate(date) {
    this.dateEnd = date;
  }

  getStartHourRepeat(hour) {
    this.hourStartRepeat = hour;
  }

  getStartMinuteRepeat(minute) {
    this.minuteStartRepeat = minute;
  }

  getEndHourRepeat(hour) {
    this.hourEndRepeat = hour;
  }

  getEndMinuteRepeat(minute) {
    this.minuteEndRepeat = minute;
  }

  chooseEquipment(equipments) {
    if (this.typeRepeat == 'normal') {
      this.equipments = [];
      equipments.forEach((element) => {
        let equipment: Equipment = {
          equipmentId: element,
          timeStart: new Date(
            this.dateStart + ' ' + this.hourStart + ':' + this.minuteStart
          ),
          timeDue: new Date(
            this.dateEnd + ' ' + this.hourEnd + ':' + this.minuteEnd
          ),
        };
        this.equipments.push(equipment);
      });
    } else {
      this.equipments = [];
      equipments.forEach((element) => {
        let equipment: Equipment = {
          equipmentId: element,
          timeStart: new Date(),
          timeDue: new Date(this.endDate),
        };
        this.equipments.push(equipment);
      });
    }
    this.equipmentsString = this.equipments
      .map(
        (item) => `${this.selectEquipment[item.equipmentId - 1].categoryName}`
      )
      .join(',');
  }

  choosePraticipant(praticipants) {
    this.praticipants = praticipants;
    this.praticipantsString = this.praticipants
      .map((item) => `${this.selectUserIds[item - 1].categoryName}`)
      .join(',');
  }

  chooseTypeSchedule(typeSchedule) {
    this.typeSchedule = typeSchedule;
  }

  chooseImportant(important) {
    this.important = important;
  }

  getDescription(description) {
    this.description = description;
  }

  changeRadio() {
    this.selectMultiple1.clear();
    this.selectMultiple2.clear();
    this.equipmentsString = '';
    this.praticipantsString = '';
    this.equipments = [];
    if (this.repeat == 'normal') {
      this.showRepeat = false;
      this.typeRepeat = 'normal';
      this.valueRepeat = '';
    } else {
      this.showRepeat = true;
      this.typeRepeat = 'everyday';
      this.valueRepeat = 'everyday';
    }
  }

  chooseWeekly(value) {
    this.weekly = value;
    this.valueRepeat = this.weekly;
    this.typeRepeat = 'weekly';
  }

  chooseMonthly(value) {
    this.monthly = value;
    this.valueRepeat = this.monthly;
    this.typeRepeat = 'monthly';
  }

  getRepeatDate(value) {
    this.endDate = value;
  }

  changeRadioRepeat() {
    switch (this.typeRepeat) {
      case 'weekly':
        this.valueRepeat = this.weekly;
        break;
      case 'monthly':
        this.valueRepeat = this.monthly;
        break;
      default:
        this.valueRepeat = 'everyday';
    }
  }
}
