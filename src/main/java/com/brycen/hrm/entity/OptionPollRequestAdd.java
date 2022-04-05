package com.brycen.hrm.entity;

public class OptionPollRequestAdd {

	private String optionName;

	private String createDate;

	private long createBy;

	private int pollId;

	public OptionPollRequestAdd() {

	}

	/**
	 * @return the optionName
	 */
	public String getOptionName() {
		return optionName;
	}

	/**
	 * @param optionName the optionName to set
	 */
	public void setOptionName(String optionName) {
		this.optionName = optionName;
	}

	/**
	 * @return the createDate
	 */
	public String getCreateDate() {
		return createDate;
	}

	/**
	 * @param createDate the createDate to set
	 */
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	/**
	 * @return the createBy
	 */
	public long getCreateBy() {
		return createBy;
	}

	/**
	 * @param createBy the createBy to set
	 */
	public void setCreateBy(long createBy) {
		this.createBy = createBy;
	}

	/**
	 * @return the pollId
	 */
	public int getPollId() {
		return pollId;
	}

	/**
	 * @param pollId the pollId to set
	 */
	public void setPollId(int pollId) {
		this.pollId = pollId;
	}

}
