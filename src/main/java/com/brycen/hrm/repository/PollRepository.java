package com.brycen.hrm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.brycen.hrm.entity.Poll;

@Repository
public interface PollRepository extends JpaRepository<Poll, Integer> {

	@Query("select p from Poll p where p.pollId = ?1")
	Poll getPollByPollId(int pollId);
	

}
