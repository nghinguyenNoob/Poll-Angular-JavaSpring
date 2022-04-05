package com.brycen.hrm.entity;

public class TopVoteResponse {

	private int optionId;

	private int pollId;

	private String optionName;

	private long voteCount;

	public TopVoteResponse() {
		super();
	}

	/**
	 * @param optionId
	 * @param pollId
	 * @param optionName
	 * @param voteCount
	 */
	public TopVoteResponse(int optionId, int pollId, String optionName, long voteCount) {
		super();
		this.optionId = optionId;
		this.pollId = pollId;
		this.optionName = optionName;
		this.voteCount = voteCount;
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
	 * @return the voteCount
	 */
	public long getVoteCount() {
		return voteCount;
	}

	/**
	 * @param voteCount the voteCount to set
	 */
	public void setVoteCount(long voteCount) {
		this.voteCount = voteCount;
	}

}
