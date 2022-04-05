package com.brycen.hrm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brycen.hrm.entity.ExcelTemplate;
import com.brycen.hrm.repository.ExcelTemplateRepository;
import com.brycen.hrm.service.ExcelTemplateService;

@Service
public class ExcelTemplateServiceImpl implements ExcelTemplateService{

	@Autowired
    private ExcelTemplateRepository excelTemplateRepository;
	
	@Override
	public List<ExcelTemplate> findAll() {
		return excelTemplateRepository.findAll();	
	}

	@Override
	public void InsertExcelTemplate(ExcelTemplate excelTemplate) {
		excelTemplateRepository.save(excelTemplate);
		
	}

}
