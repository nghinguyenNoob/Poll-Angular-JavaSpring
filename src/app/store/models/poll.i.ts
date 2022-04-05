import { FormArray } from "@angular/forms";

export interface PollList {
    filterBox: string;
    title: string;
    btnAdd: string;
  }

export class Poll{
    question: string;
    date: string;
    time: string;
    checkMultipleAnswers: boolean;
    optionPoll: FormArray;
}

export class Status{
    public static IN_PROCESS = "In process";
}

export class OptionPollResponse{
    optionId: number;
    optionName: string;
    voteCount: number;
    proPercen: number;
    isSelectedUser: boolean;
    voteBy: VoteBy[] = [];
}

export class VoteBy{
    voteById: number;
    voteByName: string;
}