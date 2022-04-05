package com.brycen.hrm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brycen.hrm.entity.OptionPollDetail;
import com.brycen.hrm.repository.OptionPollDetailRepository;
import com.brycen.hrm.service.OptionPollDetailService;

@Service
public class OptionPollDetailServiceImpl implements OptionPollDetailService {

	@Autowired
	private OptionPollDetailRepository optionPollDetailRepository;

	@Override
	public List<OptionPollDetail> getListOptionPollDetail() {
		return optionPollDetailRepository.findAll();
	}

	@Override
	public List<OptionPollDetail> getOptionPollDetailByOptionId(int[] optionId) {
		return optionPollDetailRepository.getOptionPollDetailByOptionId(optionId);
	}

	@Override
	public void saveOptionPollDetail(OptionPollDetail opd) {
		optionPollDetailRepository.save(opd);

	}

	@Override
	public void deleteOptionPollDetail(int[] optionId, long voteBy) {
		optionPollDetailRepository.deleteOptionPollDetail(optionId, voteBy);
	}

}
