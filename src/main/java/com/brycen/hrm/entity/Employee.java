package com.brycen.hrm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {
	
	@Id
	@Column(name ="employee_id")
	private long employee_id ;
	private String employee_code;
	private String last_name;
	private String first_name;
	private String avata_url;
	private String is_delete;
	
	public long getEmployee_id() {
		return employee_id;
	}
	public void setEmployee_id(long employee_id) {
		this.employee_id = employee_id;
	}
	
	public String getEmployee_code() {
		return employee_code;
	}
	public void setEmployee_code(String employee_code) {
		this.employee_code = employee_code;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getAvata_url() {
		return avata_url;
	}
	public void setAvata_url(String avata_url) {
		this.avata_url = avata_url;
	}
	public String getIs_delete() {
		return is_delete;
	}
	public void setIs_delete(String is_delete) {
		this.is_delete = is_delete;
	}
	public Employee(long employee_id, String employee_code, String last_name, String first_name, String avata_url,
			String is_delete) {
		super();
		this.employee_id = employee_id;
		this.employee_code = employee_code;
		this.last_name = last_name;
		this.first_name = first_name;
		this.avata_url = avata_url;
		this.is_delete = is_delete;
	}
	public Employee() {
		super();
	}

	
}
