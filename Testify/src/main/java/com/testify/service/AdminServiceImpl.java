package com.testify.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.testify.domain.Admin;
import com.testify.repository.AdminDao;
@Component
@Transactional
public class AdminServiceImpl  implements AdminService{
	@Autowired
 private AdminDao adminDao;

	@Override
	public List<Admin> getAllAdminService() {
		return adminDao.getAllAdmins();
	}

	@Override
	public void addAdminService(Admin c) {
		adminDao.addNewAdmin(c);
	}

	@Override
	public boolean login(Admin admin) {
		return adminDao.login(admin);
	}

}
	