package com.brycen.hrm.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.brycen.hrm.entity.Poll;

public interface PollService {

	List<Poll> getListPoll();

	void deletePoll(int id);

	Page<Poll> findAll(Pageable pageable);

	Page<Poll> getPollByTextSearch(String textSearch, Pageable pageable);

	Poll savePoll(Poll poll);
	
	Poll getPollById(int pollId);
}
