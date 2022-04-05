package com.brycen.hrm.entity;

public class PollResponse {

	private int pollId;

	private String question;

	private String expiration;

	private String status;

	private long employeeId;

	private String firstName;

	private String lastName;

	public PollResponse() {
		super();
	}

	/**
	 * @param pollId
	 * @param question
	 * @param expiration
	 * @param status
	 * @param employeeId
	 * @param firstName
	 * @param lastName
	 */
	public PollResponse(int pollId, String question, String expiration, String status, long employeeId, String firstName,
			String lastName) {
		super();
		this.pollId = pollId;
		this.question = question;
		this.expiration = expiration;
		this.status = status;
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.lastName = lastName;
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
	 * @return the employeeId
	 */
	public long getEmployeeId() {
		return employeeId;
	}

	/**
	 * @param employeeId the employeeId to set
	 */
	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}

	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}
