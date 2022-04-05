package com.brycen.hrm.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "excel_template")
public class ExcelTemplate {
	private long excel_table_id;
	private String excel_table_name;
	private String excel_table_sheet_name;
	private String title;
	private String note;
	private Date time;
	private String column_header;
	private Date create_date;
	private String create_by;
	private Date update_date;
	private String update_by;
	private int is_delete;
	@Id
	public long getExcel_table_id() {
		return excel_table_id;
	}
	public void setExcel_table_id(long excel_table_id) {
		this.excel_table_id = excel_table_id;
	}
	public String getExcel_table_name() {
		return excel_table_name;
	}
	public void setExcel_table_name(String excel_table_name) {
		this.excel_table_name = excel_table_name;
	}
	public String getExcel_table_sheet_name() {
		return excel_table_sheet_name;
	}
	public void setExcel_table_sheet_name(String excel_table_sheet_name) {
		this.excel_table_sheet_name = excel_table_sheet_name;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public String getColumn_header() {
		return column_header;
	}
	public void setColumn_header(String column_header) {
		this.column_header = column_header;
	}
	public Date getCreate_date() {
		return create_date;
	}
	public void setCreate_date(Date create_date) {
		this.create_date = create_date;
	}
	public String getCreate_by() {
		return create_by;
	}
	public void setCreate_by(String create_by) {
		this.create_by = create_by;
	}
	public Date getUpdate_date() {
		return update_date;
	}
	public void setUpdate_date(Date update_date) {
		this.update_date = update_date;
	}
	public String getUpdate_by() {
		return update_by;
	}
	public void setUpdate_by(String update_by) {
		this.update_by = update_by;
	}
	public int getIs_delete() {
		return is_delete;
	}
	public void setIs_delete(int is_delete) {
		this.is_delete = is_delete;
	}
	public ExcelTemplate(long excel_table_id, String excel_table_name, String excel_table_sheet_name, String title,
			String note, Date time, String column_header, Date create_date, String create_by, Date update_date,
			String update_by, int is_delete) {
		super();
		this.excel_table_id = excel_table_id;
		this.excel_table_name = excel_table_name;
		this.excel_table_sheet_name = excel_table_sheet_name;
		this.title = title;
		this.note = note;
		this.time = time;
		this.column_header = column_header;
		this.create_date = create_date;
		this.create_by = create_by;
		this.update_date = update_date;
		this.update_by = update_by;
		this.is_delete = is_delete;
	}
	public ExcelTemplate() {
		super();
	}


}
