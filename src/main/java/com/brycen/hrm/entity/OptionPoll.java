package com.brycen.hrm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "option_poll")
public class OptionPoll {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "option_id")
	private int optionId;

	@ManyToOne
	@JoinColumn(name = "poll_id")
	private Poll poll;

	@Column(name = "option_name")
	private String optionName;

	@Column(name = "create_date")
	private String createDate;

	@ManyToOne
	@JoinColumn(name = "create_by")
	private Employee createBy;

	@Column(name = "update_date", nullable = true)
	private String updateDate;

	@ManyToOne
	@JoinColumn(name = "update_by", nullable = true)
	private Employee updateBy;

	@Column(name = "is_delete")
	private int isDelete;

	public OptionPoll() {
		
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
	 * @return the poll
	 */
	public Poll getPoll() {
		return poll;
	}

	/**
	 * @param poll the poll to set
	 */
	public void setPoll(Poll poll) {
		this.poll = poll;
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
	public Employee getCreateBy() {
		return createBy;
	}

	/**
	 * @param createBy the createBy to set
	 */
	public void setCreateBy(Employee createBy) {
		this.createBy = createBy;
	}

	/**
	 * @return the updateDate
	 */
	public String getUpdateDate() {
		return updateDate;
	}

	/**
	 * @param updateDate the updateDate to set
	 */
	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}

	/**
	 * @return the updateBy
	 */
	public Employee getUpdateBy() {
		return updateBy;
	}

	/**
	 * @param updateBy the updateBy to set
	 */
	public void setUpdateBy(Employee updateBy) {
		this.updateBy = updateBy;
	}

	/**
	 * @return the isDelete
	 */
	public int getIsDelete() {
		return isDelete;
	}

	/**
	 * @param isDelete the isDelete to set
	 */
	public void setIsDelete(int isDelete) {
		this.isDelete = isDelete;
	}

}
