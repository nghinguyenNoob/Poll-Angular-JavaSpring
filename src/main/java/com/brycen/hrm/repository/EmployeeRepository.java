package com.brycen.hrm.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.brycen.hrm.entity.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	@Query("select e from Employee e where e.employee_id=?1")
	Employee getEmployeeById(long employeeId);
}
