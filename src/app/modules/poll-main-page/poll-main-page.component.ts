import { Component, OnInit } from '@angular/core';

import { PollService } from '../../store/services/poll.service'
import { OptionPollResponse, VoteBy } from '../../store/models/poll.i';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-poll-main-page',
  templateUrl: './poll-main-page.component.html',
  styleUrls: ['./poll-main-page.component.scss'],
  providers: [DatePipe],
})
export class PollMainPageComponent implements OnInit {

  public labelQuestion: string = 'Question';
  public labelExpiration: string = 'Expiration';
  public labelResponse: string = 'Response';
  public titlePoll: string = 'Poll';
  public question: string;
  public expiration: string;
  public allowMultiple: number;
  public responses: OptionPollResponse[] = [];
  public typeInput: string;
  public pollId: any;
  public listOptionId: any[];
  public countOptionVote = 0;
  public userIdLogin = 7000;
  constructor(
    private pollservice: PollService,
    private datePipe: DatePipe,
    private router: Router,
    private activateRouter: ActivatedRoute,
  ) {
    this.pollId = this.activateRouter.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    //this.getData();
    this.getDataPoll();
    this.getDataOption();
  }

  getData() { // divided into many different fucntion: getDataPoll, getDataOption, getDataOptionDetail
    this.listOptionId = [];
    this.pollservice.getPollById({ pollId: this.pollId }).subscribe(pollData => {
      this.question = pollData.question;
      this.expiration = pollData.expiration;
      this.allowMultiple = pollData.allowMultiple;
      if (pollData.allowMultiple == 1) {
        this.typeInput = 'checkbox';
      } else {
        this.typeInput = 'radio';
      }
      this.pollservice.getOptionPollByPollId({ pollId: pollData.pollId }).subscribe(oppData => {
        oppData.forEach(elementOpp => {
          this.listOptionId.push(elementOpp.optionId);
        });
        this.pollservice.getOptionPollDetailsByOptionPollId(this.listOptionId).subscribe(opdData => {
          oppData.forEach(elementOpp => {
            let oppResponse: OptionPollResponse = new OptionPollResponse();
            let voteCount = 0;
            oppResponse.optionId = elementOpp.optionId;
            oppResponse.optionName = elementOpp.optionName;
            if (opdData.length > 0) {
              opdData.forEach(elementOpd => {
                if (elementOpd.optionPoll.optionId == elementOpp.optionId) {
                  voteCount = voteCount + 1;
                  this.countOptionVote = this.countOptionVote + 1;
                  let voteBy: VoteBy = new VoteBy();
                  voteBy.voteById = elementOpd.voteBy.employee_id;
                  if (voteBy.voteById == this.userIdLogin) {
                    oppResponse.isSelectedUser = true;
                  }
                  voteBy.voteByName = elementOpd.voteBy.last_name;
                  oppResponse.voteBy.push(voteBy);
                }
              });
            }
            oppResponse.voteCount = voteCount;
            this.responses.push(oppResponse);
          });
          this.updateVoteCount(this.responses);
        });
      });
    });
  }

  getDataPoll() {
    this.pollservice.getPollById({ pollId: this.pollId }).subscribe(pollData => {
      this.question = pollData.question;
      this.expiration = pollData.expiration;
      this.allowMultiple = pollData.allowMultiple;
      if (pollData.allowMultiple == 1) {
        this.typeInput = 'checkbox';
      } else {
        this.typeInput = 'radio';
      }
    });
  }

  getDataOption() {
    this.listOptionId = [];
    this.pollservice.getOptionPollByPollId({ pollId: this.pollId }).subscribe(oppData => {
      oppData.forEach(elementOpp => {
        this.listOptionId.push(elementOpp.optionId);
      });
      this.getDataOptionDetail(this.listOptionId, oppData);
    });
  }

  getDataOptionDetail(optionIds, oppData) {
    this.pollservice.getOptionPollDetailsByOptionPollId(optionIds).subscribe(opdData => {
      this.countOptionVote = 0;
      oppData.forEach(elementOpp => {
        let oppResponse: OptionPollResponse = new OptionPollResponse();
        let voteCount = 0;
        oppResponse.optionId = elementOpp.optionId;
        oppResponse.optionName = elementOpp.optionName;
        if (opdData.length > 0) {
          opdData.forEach(elementOpd => {
            if (elementOpd.optionPoll.optionId == elementOpp.optionId) {
              voteCount = voteCount + 1;
              this.countOptionVote = this.countOptionVote + 1;
              let voteBy: VoteBy = new VoteBy();
              voteBy.voteById = elementOpd.voteBy.employee_id;
              if (voteBy.voteById == this.userIdLogin) {
                oppResponse.isSelectedUser = true;
              }
              voteBy.voteByName = elementOpd.voteBy.last_name;
              oppResponse.voteBy.push(voteBy);
            }
          });
        }
        oppResponse.voteCount = voteCount;
        this.responses.push(oppResponse);
      });
      this.updateVoteCount(this.responses);
    });
  }

  updateVoteCount(response: OptionPollResponse[]) {
    for (let i = 0; i < response.length; i++) {
      let res: OptionPollResponse = new OptionPollResponse();
      res = response[i];
      res.proPercen = (res.voteCount / this.countOptionVote) * 100;
      response[i] = res;
    }
  }

  addDataOption(data) {
    let date = new Date();
    let optionPoll = {
      optionName: data.optionName,
      createDate: this.datePipe.transform(date, 'yyyy-MM-dd'),
      createBy: this.userIdLogin,
      pollId: this.pollId,
    }
    this.pollservice.saveOptionPoll(optionPoll).subscribe(data => {
      this.responses = [];
      this.getDataOption();
    });
  }

  saveChange(data) {
    let checked = data.checked;
    let optionId = data.optionId;
    let date = new Date();
    let optionPollDetail = {
      optionId: optionId,
      voteDate: this.datePipe.transform(date, 'yyyy-MM-dd'),
      voteBy: this.userIdLogin,
      listOptionId: this.listOptionId,
      allowMultiple: this.allowMultiple
    }
    // if user select option then add option detail
    if (checked) {
      this.pollservice.saveOptionPollDetail(optionPollDetail).subscribe(data => {
        console.log("save optiondetail: " + data);
        this.responses = [];
        this.getDataOption();
      });
    } else { // if user unselect then remove( sau nay se chuyen thanh updat: isdelete =1) option detail
      this.pollservice.deleteOptionPollDetail({ optionId: optionId, voteBy: this.userIdLogin }).subscribe(data => {
        console.log("delete optiondetail: " + data);
        this.responses = [];
        this.getDataOption();
      })
    }
  }

  viewMoreVoteOption(optionId) {
    this.router.navigateByUrl(`poll/detail/${this.pollId}/${optionId}`);
  }

  backScreenPoll() {
    this.router.navigateByUrl('poll');
  }

}
