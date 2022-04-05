import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
@Component({
  selector: 'brc-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @ViewChild('control') control: ElementRef;
  @ViewChild('hidepicker') toggleButton: ElementRef;
  @ViewChild('previous') previous: ElementRef;
  @ViewChild('after') after: ElementRef;
  @Output() getDate = new EventEmitter<string>();
  @Input() value: string;

  public showed = false;
  listMonthText = [
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
  date: Date;
  minYear: number;
  maxYear: number;
  year: number;
  month: number;
  dayOfMonth: number;
  txtMonthYear: string;
  disableNext = false;
  disablePrevous = false;
  listYear: number[] = [];
  listWeek: [number[]] = [[]];
  listMonth: string[] = [];

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        !this.toggleButton.nativeElement.contains(e.target) &&
        !this.previous.nativeElement.contains(e.target) &&
        !this.after.nativeElement.contains(e.target) &&
        !this.control.nativeElement.contains(e.target)
      ) {
        this.showed = false;
      }
    });
  }

  ngOnInit(): void {
    if (this.valiDate(this.value)) {
      this.date = new Date(this.value);
    } else {
      this.date = new Date();
      this.value = '';
    }
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.dayOfMonth = this.date.getDate();
    this.minYear = this.year - 10;
    this.maxYear = this.year + 10;
    this.getDayOfMonth(this.date.getMonth());
    this.txtMonthYear = this.listMonthText[this.month] + '   ' + this.year;
  }

  //get date now
  getNow() {
    this.date = new Date();
    this.value = this.dateFormat(this.date);
    this.getDate.emit(this.value);
    this.showed = false;
  }

  onchange() {
    if (this.valiDate(this.value)) {
      this.date = new Date();
    } else {
      this.date = new Date(this.value);
    }
    this.getDate.emit(this.value);
  }

  getDayOfMonth(month) {
    this.txtMonthYear = this.listMonthText[this.month] + '   ' + this.year;
    month++;
    let days;
    this.resetList();
    if (month == 2) {
      this.year % 4 == 0 ? (days = 29) : (days = 28);
    } else {
      if (month == 4 || month == 6 || month == 9 || month == 11) {
        days = 30;
      } else {
        days = 31;
      }
    }
    let strDate = month + '/' + '1' + '/' + this.year;
    let date = new Date(strDate);
    let week: number[] = [];
    let day = date.getDay();

    for (let i = 0; i < day; i++) {
      week.push(0);
    }
    let j = date.getDay();
    for (let d = 1; d <= days; d++) {
      if (j == 7) {
        this.listWeek.push(week);
        week = [d];
        j = 1;
      } else {
        week.push(d);
        j++;
      }
    }
  }

  getYear() {
    this.resetList();
    for (let y = this.minYear; y < this.maxYear; y++) {
      this.listYear.push(y);
    }
  }

  getMonth() {
    if (this.listMonth.length < 1) {
      this.txtMonthYear = this.year + '';
      this.resetList();
      this.listMonth = this.listMonthText;
    } else {
      this.getYear();
    }
  }

  chooseYear(year) {
    this.disableNext = false;
    this.disablePrevous = false;
    this.year = year;
    this.resetList();
    this.getMonth();
  }

  chooseMonth(mon) {
    this.month = mon;
    this.resetList();
    this.getDayOfMonth(this.month);
  }

  chooseDate(date) {
    let strDate = this.month + 1 + '/' + date + '/' + this.year;
    this.date = new Date(strDate);
    this.value = this.dateFormat(this.date);
    this.getDate.emit(this.value);
    this.showed = false;
  }

  next() {
    this.disablePrevous = false;
    if (this.listYear.length > 0) {
      this.minYear += 15;
      this.maxYear += 15;
      this.getYear();
      if (this.maxYear >= 2040) {
        this.disableNext = true;
      }
    } else {
      if (this.month < 11) this.month++;
      else {
        this.month = 0;
        this.year++;
        if (this.year >= 2040) this.disableNext = true;
      }
      this.getDayOfMonth(this.month);
    }
  }

  prevous() {
    this.disableNext = false;
    if (this.listYear.length > 0) {
      this.minYear -= 15;
      this.maxYear -= 15;
      this.getYear();
      if (this.minYear <= 1960) {
        this.disablePrevous = true;
      }
    } else {
      if (this.month > 0) this.month--;
      else {
        this.month = 11;
        this.year--;
        if (this.year <= 1960) this.disablePrevous = true;
      }
      this.getDayOfMonth(this.month);
    }
  }

  resetList() {
    this.listYear = [];
    this.listMonth = [];
    this.listWeek = [[]];
  }

  //check date is choosed
  checkActive(date) {
    if (this.listMonth.length > 1) {
      if (
        date == this.date.getMonth() &&
        this.year == this.date.getFullYear()
      ) {
        return true;
      }
      return false;
    } else {
      if (date == this.date.getDate() && this.month == this.date.getMonth()) {
        return true;
      }
      return false;
    }
  }

  dateFormat(date: Date) {
    let month: string = String(date.getMonth() + 1);
    let day: string = String(date.getDate());
    if (date.getMonth() + 1 < 10) {
      month = '0' + (date.getMonth() + 1);
    }
    if (date.getDate() < 10) {
      day = '0' + date.getDate();
    }
    // return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    return date.getFullYear() + '-' + month + '-' + day;
  }

  valiDate(date: string): boolean {
    if (date == null) {
      return false;
    }
    let items = date.split('-');
    if (items.length > 3) {
      return false;
    }

    let temDate = new Date(items[1] + '-' + items[0] + '-' + items[2]);
    if (isNaN(temDate.getDate())) {
      return false;
    }
    return true;
  }

  toggleMenu() {
    console.log('demo');
    this.showed = !this.showed;
  }
}
