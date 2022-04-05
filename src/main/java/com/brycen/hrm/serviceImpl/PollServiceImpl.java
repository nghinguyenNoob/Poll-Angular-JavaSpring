package com.brycen.hrm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.brycen.hrm.entity.Poll;
import com.brycen.hrm.repository.PollPageRepository;
import com.brycen.hrm.repository.PollRepository;
import com.brycen.hrm.service.PollService;

@Service
public class PollServiceImpl implements PollService {

	@Autowired
	PollRepository pollRepository;

	@Autowired
	PollPageRepository pollPageRepository;

	@Override
	public List<Poll> getListPoll() {
		return (List<Poll>) pollRepository.findAll();
	}

	@Override
	public void deletePoll(int id) {
		pollRepository.deleteById(id);

	}

	@Override
	public Page<Poll> findAll(Pageable pageable) {
		return pollPageRepository.findAll(pageable);
	}

	@Override
	public Page<Poll> getPollByTextSearch(String textSearch, Pageable pageable) {
		return pollPageRepository.getPollByTextSearch(textSearch, pageable);
	}

	@Override
	public Poll savePoll(Poll poll) {
		return pollRepository.save(poll);
	}

	@Override
	public Poll getPollById(int pollId) {
		return pollRepository.getPollByPollId(pollId);
	}

}
