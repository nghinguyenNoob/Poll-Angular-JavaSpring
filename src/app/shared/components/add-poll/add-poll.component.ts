import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { configButton } from '../../../store/models/button.i';
import { LabelInterface } from '../../../store/models/label.i';
import { Poll } from '../../../store/models/poll.i';

@Component({
  selector: 'brc-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.scss'],
  providers:[DatePipe],
})
export class AddPollComponent implements OnInit {

  public optionForm: FormGroup;
  public questionPoll: string = '';
  public dateExpiration: string = '';
  public timeExpiration: string = '';
  public checkMultipleAnswers: boolean = false;
  public optionCount: boolean = false;
  public numberOfPolls: number = 2;
  public submitted = false;
  // validator
  public isQuestionRequired = true;
  public isTimeValid = true;
  public isDateValid = true;
  public isDateRequired = true;
  public isTimeRequired = true;
  // date-time picker
  public day: string = '';
  public hour: string = '';
  public minute: string = '';
  public time: string = '';

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe) { }
  // input
  @Input() buttonSubmit: configButton;
  @Input() labelQuestion: LabelInterface;
  @Input() labelExpiration: LabelInterface;
  @Input() labelOption: LabelInterface;
  @Input() labelAllowMultipleAnswer: LabelInterface;
  // output
  @Output() pollFormData: EventEmitter<Poll> = new EventEmitter<Poll>();


  ngOnInit() {
    this.optionForm = this.formBuilder.group({
      polls: new FormArray([])
    });
    for (let i = 0; i < this.numberOfPolls; i++) {
      this.option.push(
        this.formBuilder.group({
          optionName: ['', Validators.required],
        })
      );
    }
  }

  // convenience getters for easy access to form fields
  get fOption() {
    return this.optionForm.controls;
  }
  get option() {
    return this.fOption.polls as FormArray;
  }

  getDay(data) {
    this.day = data;
  }

  getHour(data) {
    this.hour = data;
  }

  getMinute(data) {
    this.minute = data;
  }

  //
  addOption() {
    this.numberOfPolls = this.numberOfPolls + 1;
    if (this.numberOfPolls > 2) {
      this.optionCount = true;
    }
    if (this.option.length < this.numberOfPolls) {
      for (let i = this.option.length; i < this.numberOfPolls; i++) {
        this.option.push(
          this.formBuilder.group({
            optionName: ["", Validators.required],
          })
        );
      }
    }
    this.submitted = false;
  }

  clearOption(index: number) {
    if (this.numberOfPolls > 2) {
      this.numberOfPolls = this.numberOfPolls - 1;
      this.option.removeAt(index);
      if (this.numberOfPolls <= 2) {
        this.optionCount = false;
      }
    }
  }

  saveDataPoll(data) {
    let question = data.question;
    let checkMultipleAnswers = data.checkMultipleAnswers;
    let isValidate = true;
    let hourSysNum: number = 0;
    let minuteSysNum: number = 0;
    let hourInNum: number = 0;
    let minuteInNum: number = 0;
    this.submitted = true;
    this.isQuestionRequired = true;
    this.isDateRequired = true;
    this.isTimeRequired = true;
    this.isDateValid = true;
    this.isTimeValid = true;

    // Validate question, date, time, checkMultiple
    let dateSys = new Date();
    let daySys = this.datePipe.transform(dateSys, 'yyyy-MM-dd');
    let timeSys = this.datePipe.transform(dateSys, 'hh:mm a');
    let time = timeSys.match(/([0-9])\d+/g);
    let hourStr = time[0];
    let minuteStr = time[1];
    let midday = timeSys.match(/([A-Z])\w+/g);
    this.time = this.hour + ':' + this.minute;
    if (midday[0] == 'PM') {
      hourSysNum = Number(hourStr) + 12;
      minuteSysNum = Number(minuteStr);
    } else {
      hourSysNum = Number(hourStr);
      minuteSysNum = Number(minuteStr);
    }

    if (question == '') {
      this.isQuestionRequired = false;
      isValidate = false;
    }
    if (this.day == '') {
      this.isDateRequired = false;
      isValidate = false;
    } else {
      if (this.day < daySys) {
        this.isDateValid = false;
        isValidate = false;
      }
    }
    if (this.hour == '' && this.minute == '') {
      this.isTimeRequired = false;
      isValidate = false;
    } else {
      if (this.day == daySys) {
        hourInNum = Number(this.hour);
        minuteInNum = Number(this.minute);
        if (hourInNum < hourSysNum) {
          this.isTimeValid = false;
          isValidate = false;
        } else {
          if (hourInNum == hourSysNum) {
            if (minuteInNum <= minuteSysNum) {
              this.isTimeValid = false;
              isValidate = false;
            }
          }
        }
      }
    }

    // Validate option
    if (this.option.length > 0) {
      for (let op of this.option.value) {
        if (op.optionName == '') {
          isValidate = false;
          console.log("Option name blank")
        }
      }
    }

    if (!isValidate) {
      return
    }

    // Set data Poll send to page add
    let dataPoll: Poll = new Poll();
    dataPoll.question = question;
    dataPoll.date = this.day;
    dataPoll.time = this.time;
    dataPoll.checkMultipleAnswers = checkMultipleAnswers;
    dataPoll.optionPoll = this.option;
    this.pollFormData.emit(dataPoll);
    this.submitted = false;
  }
}
