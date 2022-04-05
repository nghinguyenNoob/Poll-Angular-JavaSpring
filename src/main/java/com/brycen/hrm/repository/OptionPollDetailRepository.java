package com.brycen.hrm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.brycen.hrm.entity.OptionPollDetail;

@Repository
public interface OptionPollDetailRepository extends JpaRepository<OptionPollDetail, Integer> {

	@Query("select opd from OptionPollDetail opd where opd.optionPoll.optionId IN :optionId")
	List<OptionPollDetail> getOptionPollDetailByOptionId(int[] optionId);

	@Transactional
	@Modifying
	@Query("delete from OptionPollDetail opd where opd.optionPoll.optionId IN ?1 and opd.voteBy.employee_id =?2")
	void deleteOptionPollDetail(int[] optionId, long voteBy);

}
