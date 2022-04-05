package com.brycen.hrm.service;

import java.util.List;

import com.brycen.hrm.entity.OptionPoll;
import com.brycen.hrm.entity.TopVoteResponse;

public interface OptionPollService {

	List<OptionPoll> getListOptionPoll();

	List<TopVoteResponse> getListTopVote();

	OptionPoll saveOptionPoll(OptionPoll optionPoll);

	List<OptionPoll> getOptionPollByPollId(int pollId);
	
	OptionPoll getOptionPollById(int optionId);
}
