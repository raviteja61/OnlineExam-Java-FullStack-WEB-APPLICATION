package com.testify.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.testify.domain.Admin;
import com.testify.service.AdminService;

@CrossOrigin(origins = "*",
methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
@RestController
@RequestMapping("/admins")
public class AdminAPI {
	
	@Autowired
	private AdminService adminService;
			
	@PostMapping(value = "/adminlogin")
	public boolean login(@RequestBody Admin admin) {
		return adminService.login(admin);
	}
	
	@RequestMapping
	public List<Admin> getAllAdmin() {
		return adminService.getAllAdminService();
	}
	
	@PostMapping
	public void addNewAdmin(@RequestBody Admin c) {
		System.out.println(c.getAdminEmailId());
		adminService.addAdminService(c);
		
	}
}
