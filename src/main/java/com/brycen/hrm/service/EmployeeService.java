package com.brycen.hrm.service;

import java.util.List;

import com.brycen.hrm.entity.Employee;


public interface EmployeeService {
	List<Employee> findAll();
	
	Employee getEmployeeById(long employeeId);
}
