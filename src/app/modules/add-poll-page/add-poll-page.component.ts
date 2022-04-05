import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Poll, Status } from '../../store/models/poll.i';
import { configButton } from '../../store/models/button.i';
import { LabelInterface } from '../../store/models/label.i';
import { PollService } from '../../store/services/poll.service';

@Component({
  selector: 'app-add-poll-page',
  templateUrl: './add-poll-page.component.html',
  styleUrls: ['./add-poll-page.component.scss'],
  providers:[DatePipe],
})
export class AddPollPageComponent implements OnInit {

  constructor(private router: Router, private pollservice: PollService, private datePipe: DatePipe) { }

  
  labelQuestion: LabelInterface = {
    content: 'Question:',
    size: 17,
    color: '',
    backgroundColor: '',
  };

  labelExpiration: LabelInterface = {
    content: 'Expiration:',
    size: 17,
    color: 'black',
    backgroundColor: '',
  }

  labelOption: LabelInterface = {
    content: 'Option:',
    size: 17,
    color: 'black',
    backgroundColor: '',
  }

  allowMultipleAnswer: LabelInterface = {
    content: 'Allow multiple poll answers',
    size: 17,
    color: 'black',
    backgroundColor: '',
  }
  public date: string = '';
  public time: string = '';
  public question: string = '';
  public checkMultipleAnswers: boolean = false;
  public getValueDate: string;
  public getValueHour: string;
  public getValueMinute: string;
  public optionPollData: FormArray;
  public pollData: Poll;

  public configButtonAdd: configButton = {
    colorButton: 'primary',
    colorMouseOver: 'Basic',
    colorMouseOut: 'primary',
    type: 'submit',
    text: 'Add Poll',
  };

  ngOnInit() {
  }

  cancelTodo(data: string) {
    this.router.navigate([data]);
  }

  getOptionPoll(data: FormArray){
    this.optionPollData = data;
    this.optionPollData.value.forEach(element => {
      console.log(element.optionName);
    });
  }

  addPoll(data: Poll) {
    let dateTemp = new Date();
    this.pollData = data;
    let poll = {
      question: this.pollData.question,
      expiration: this.pollData.date + ":"+ this.pollData.time,
      allowMuptiple: this.pollData.checkMultipleAnswers? 1:0,
      createDate: this.datePipe.transform(dateTemp, 'yyyy-MM-dd'),
      createBy: 7000,
      status: Status.IN_PROCESS,
      optionPoll: []= this.pollData.optionPoll.value,
    }
    this.pollservice.savePoll(poll).subscribe(data =>{
      console.log(data);
    });
    this.router.navigateByUrl('/poll');
  }

}
