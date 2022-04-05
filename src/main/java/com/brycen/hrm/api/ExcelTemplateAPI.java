package com.brycen.hrm.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import com.brycen.hrm.entity.ExcelTemplate;
import com.brycen.hrm.service.ExcelTemplateService;

@CrossOrigin(origins="http://localhost:4200")  
@RestController
public class ExcelTemplateAPI {
	@Autowired
	ExcelTemplateService excelTemplateService;
	
	@GetMapping("/api/exceltemplate")
	public List<ExcelTemplate> getAllExcelTemplate() {
		return excelTemplateService.findAll();
	}
	
	@PostMapping("/api/exceltemplate")
	public void InsertExcelTemplate(@Valid @RequestBody ExcelTemplate excelTemplate) {
		excelTemplateService.InsertExcelTemplate(excelTemplate);
	}
}
