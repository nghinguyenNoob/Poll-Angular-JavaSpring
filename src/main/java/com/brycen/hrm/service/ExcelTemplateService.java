package com.brycen.hrm.service;

import java.util.List;

import com.brycen.hrm.entity.ExcelTemplate;

public interface ExcelTemplateService {
	List<ExcelTemplate> findAll();
	
	void InsertExcelTemplate(ExcelTemplate excelTemplate);
}
