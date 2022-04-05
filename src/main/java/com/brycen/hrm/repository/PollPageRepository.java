package com.brycen.hrm.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.brycen.hrm.entity.Poll;

@Repository
public interface PollPageRepository  extends PagingAndSortingRepository<Poll, Integer> {

	@Query("select p from Poll p where p.question like %?1% or p.expiration like %?1% or p.status like %?1% or p.createBy.last_name like %?1%")
	Page<Poll> getPollByTextSearch(String textSearch, Pageable pageable);
	
}
