package com.brycen.hrm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brycen.hrm.entity.ExcelTemplate;



@Repository
public interface ExcelTemplateRepository extends JpaRepository<ExcelTemplate, Long>{

}
