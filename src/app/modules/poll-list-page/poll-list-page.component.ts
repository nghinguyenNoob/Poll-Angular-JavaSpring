import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Column } from '../../store/models/column.i';
import { PollList } from '../../store/models/poll.i';
import { PollService } from '../../store/services/poll.service';


@Component({
  selector: 'brc-poll-list-page',
  templateUrl: './poll-list-page.component.html',
  styleUrls: ['./poll-list-page.component.scss'],
})
export class PollListPageComponent implements OnInit {
  public pollTotalRecords: number = 0;
  public pollRecordsPerPage: number = 3;
  public pollPageIndex: number = 0;
  public pollTextSearch: string = '';
  public pollShowButtonSelection: boolean = true;
  public pollColumns: Column[] = columns;
  public pollDataSource = [];
  public optionPollData = [];
  public optionPollDetailData = [];
  public topVotesData = [];
  public pollData = [];
  public votes = [];
  public searchText: string = '';
  public placeholder: string = 'Search';
  configPollList: PollList = {
    filterBox: 'Filter Box',
    title: 'Poll List',
    btnAdd: 'Add Poll',
  };
  constructor(private _router: Router, private pollservice: PollService) { }
  ngOnInit(): void {
    this.getData(this.pollPageIndex, this.pollRecordsPerPage, this.pollTextSearch);
  }

  getData(pageNumber: number, pageSize: number, textSearch: String) {
    this.pollservice.getPollPagination({ page: pageNumber, size: pageSize, text: textSearch })
      .subscribe((response) => {
        if (response.polls.length == 0 && pageNumber > 0) {
          this.pollPageIndex =  this.pollPageIndex - 1;
          this.getData(pageNumber - 1, pageSize, "");
        } else {
          this.pollData = response.polls;
          this.pollTotalRecords = response.totalElements;
          this.pollservice.getListTopVote().subscribe(dataTop => {
            this.topVotesData = dataTop;
            let index = pageSize * pageNumber;
            this.pollDataSource = [];
            this.pollData.forEach(poll => {
              let topvotes: any;
              topvotes = ['top'];
              this.topVotesData.forEach(topVote => {
                if (poll['pollId'] == topVote['pollId']) {
                  let vote = { optionName: topVote['optionName'], voteCount: topVote['voteCount'] };
                  topvotes.push(vote);
                }
              });
              let data =
              {
                id: poll['pollId'], stt: index + 1, question: poll['question'], expiration: poll['expiration'], status: poll['status'], create_by: poll['createBy'].first_name + " " + poll['createBy'].last_name,
                topvotes,
                action: 'action'
              }
              this.pollDataSource.push(data);
              index = index + 1;
            });
          })
        }
      });
  }

  pollAdd(data) {
    this._router.navigateByUrl('poll/add');
  }

  rowDetail(data: Object) {
    this._router.navigateByUrl(`poll/poll-vote/${data['id']}`);
  }

  rowDelete(data: Object) {
    if (confirm("Are you sure delete poll")) {
      this.pollservice.deletePoll(data['id']).subscribe(data => {
        console.log(data);
        this.getData(this.pollPageIndex, this.pollRecordsPerPage, "");
      },
        error => {
          console.log(error);
        }
      );
    }
  }

  changePage(data) {
    this.pollPageIndex = data.pageIndex;
    this.pollRecordsPerPage = data.pageSize;
    this.getData(this.pollPageIndex, this.pollRecordsPerPage, this.searchText);
  }

  onChangeSearch(data){
    this.searchText = data;
    this.pollPageIndex = 0;
    this.getData(this.pollPageIndex, this.pollRecordsPerPage, this.searchText);
  }

}
// mock data 
const columns: Column[] = [
  // {
  //   title: 'STT',
  //   dataIndex: 'stt',
  //   sort: true,
  // },
  {
    title: 'Question',
    dataIndex: 'question',
    sort: true,
  },
  {
    title: 'Expiration',
    dataIndex: 'expiration',
    sort: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sort: true,
  },
  {
    title: 'Created by',
    dataIndex: 'create_by',
    sort: true,
  },
  {
    title: 'Top votes',
    dataIndex: 'topvotes',
    sort: false,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    sort: false,
  },
];
