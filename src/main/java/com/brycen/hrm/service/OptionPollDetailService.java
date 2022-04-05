package com.brycen.hrm.service;

import java.util.List;

import com.brycen.hrm.entity.OptionPollDetail;

public interface OptionPollDetailService {

	List<OptionPollDetail> getListOptionPollDetail();

	List<OptionPollDetail> getOptionPollDetailByOptionId(int[] optionId);

	void saveOptionPollDetail(OptionPollDetail opd);

	void deleteOptionPollDetail(int[] optionId, long voteBy);
}
