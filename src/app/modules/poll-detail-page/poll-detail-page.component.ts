import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PollService } from 'src/app/store/services/poll.service';

@Component({
  selector: 'app-poll-detail-page',
  templateUrl: './poll-detail-page.component.html',
  styleUrls: ['./poll-detail-page.component.scss']
})
export class PollDetailPageComponent implements OnInit {

  public optionId: any;
  public optionIdList: any[] = [];
  public pollId: any;
  public optionName: string;
  public optionIdTempl: string;
  public topvote: number = 0;;
  public voterList: any[] = [];
  public topVotesData = [];
  constructor(
    private pollservice: PollService,
    private activeRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.pollId = this.activeRouter.snapshot.paramMap.get('pollId');
    this.optionId = this.activeRouter.snapshot.paramMap.get('optionId');

  }
  ngOnInit(): void {

    this.optionIdList.push(this.optionId);
    this.pollservice.getOptionPollDetailsByOptionPollId(this.optionIdList).subscribe(data => {
      this.voterList = data;
      console.log(this.voterList)
      this.optionName = this.voterList[0].optionPoll.optionName;
      this.optionIdTempl = this.voterList[0].optionPoll.optionId;
      this.pollservice.getListTopVote().subscribe(dataTop => {
        this.topVotesData = dataTop;
        for (let i = 0; i < this.topVotesData.length; i++){
          if(this.pollId == this.topVotesData[i]['pollId']){
            this.topvote = this.topvote +1
            if (this.optionIdTempl == this.topVotesData[i]['optionId']) {
              break;
            }
          }
        }
      });
    })
  }

  backScreenOption(){
    this.router.navigateByUrl(`poll/poll-vote/${this.pollId}`);
  }
}
