package com.brycen.hrm.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")  
@RestController
public class TestAPI {

	@GetMapping("/api/test")
    public ResponseEntity<String> testSpringBoot() {
        return ResponseEntity.ok("Success");
    }
	

}