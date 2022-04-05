package com.brycen.hrm.entity;

import java.util.List;

public class PollRequestAdd {

	private String question;

	private String expiration;

	private int allowMuptiple;

	private String createDate;

	private long createBy;

	private String status;

	private List<OptionPollNameRequestAdd> optionPoll;

	/**
	 * @return the question
	 */
	public String getQuestion() {
		return question;
	}

	/**
	 * @param question the question to set
	 */
	public void setQuestion(String question) {
		this.question = question;
	}

	/**
	 * @return the expiration
	 */
	public String getExpiration() {
		return expiration;
	}

	/**
	 * @param expiration the expiration to set
	 */
	public void setExpiration(String expiration) {
		this.expiration = expiration;
	}

	/**
	 * @return the allowMuptiple
	 */
	public int getAllowMuptiple() {
		return allowMuptiple;
	}

	/**
	 * @param allowMuptiple the allowMuptiple to set
	 */
	public void setAllowMuptiple(int allowMuptiple) {
		this.allowMuptiple = allowMuptiple;
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
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * @return the optionPoll
	 */
	public List<OptionPollNameRequestAdd> getOptionPoll() {
		return optionPoll;
	}

	/**
	 * @param optionPoll the optionPoll to set
	 */
	public void setOptionPoll(List<OptionPollNameRequestAdd> optionPoll) {
		this.optionPoll = optionPoll;
	}

}
