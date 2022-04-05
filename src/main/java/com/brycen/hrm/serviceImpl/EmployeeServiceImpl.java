package com.brycen.hrm.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brycen.hrm.entity.Employee;
import com.brycen.hrm.repository.EmployeeRepository;
import com.brycen.hrm.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public List<Employee> findAll() {
		return employeeRepository.findAll();

	}

	@Override
	public Employee getEmployeeById(long employeeId) {
		return employeeRepository.getEmployeeById(employeeId);
	}

}
