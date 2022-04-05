package com.brycen.hrm.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brycen.hrm.entity.Employee;
import com.brycen.hrm.service.EmployeeService;

@CrossOrigin(origins="http://localhost:4200")  
@RestController
public class EmployeeAPI {
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("/api/employees")
	public List<Employee> getAllEmployees() {
		return employeeService.findAll();
	}
}
