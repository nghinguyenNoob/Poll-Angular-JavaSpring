package com.brycen.hrm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.brycen.hrm.entity.OptionPoll;
import com.brycen.hrm.entity.TopVoteResponse;

@Repository
public interface OptionPollRepository extends JpaRepository<OptionPoll, Integer> {

	@Query("SELECT new com.brycen.hrm.entity.TopVoteResponse("
			+ "opp.optionId,opp.poll.pollId,opp.optionName,COUNT(opd.optionPoll.optionId))"
			+ "FROM OptionPollDetail opd right join opd.optionPoll opp"
			+ " GROUP BY opp.optionId,opp.poll.pollId,opp.optionName"
			+ " ORDER BY opp.poll.pollId, COUNT(opd.optionPoll.optionId) DESC, opp.optionId")	
	public List<TopVoteResponse> getListTopVote();
	
	@Query("select op from OptionPoll op where op.poll.pollId = ?1")
	List<OptionPoll> getOptionPollByPollId(int pollId);
	
	@Query("select op from OptionPoll op where op.optionId = ?1")
	OptionPoll getOptionPollById(int optionId);
	
}
