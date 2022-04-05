package com.brycen.hrm.entity;

import java.util.List;

public class OptionPollDetailRequestAdd {

	private int optionId;

	private String voteDate;

	private long voteBy;

	private int[] listOptionId;

	private int allowMultiple;

	public OptionPollDetailRequestAdd() {

	}

	/**
	 * @return the optionId
	 */
	public int getOptionId() {
		return optionId;
	}

	/**
	 * @param optionId the optionId to set
	 */
	public void setOptionId(int optionId) {
		this.optionId = optionId;
	}

	/**
	 * @return the voteDate
	 */
	public String getVoteDate() {
		return voteDate;
	}

	/**
	 * @param voteDate the voteDate to set
	 */
	public void setVoteDate(String voteDate) {
		this.voteDate = voteDate;
	}

	/**
	 * @return the voteBy
	 */
	public long getVoteBy() {
		return voteBy;
	}

	/**
	 * @param voteBy the voteBy to set
	 */
	public void setVoteBy(long voteBy) {
		this.voteBy = voteBy;
	}

	/**
	 * @return the listOptionId
	 */
	public int[] getListOptionId() {
		return listOptionId;
	}

	/**
	 * @param listOptionId the listOptionId to set
	 */
	public void setListOptionId(int[] listOptionId) {
		this.listOptionId = listOptionId;
	}

	/**
	 * @return the allowMultiple
	 */
	public int getAllowMultiple() {
		return allowMultiple;
	}

	/**
	 * @param allowMultiple the allowMultiple to set
	 */
	public void setAllowMultiple(int allowMultiple) {
		this.allowMultiple = allowMultiple;
	}

}
