package com.testify.repository;

import java.util.List;


import com.testify.domain.Admin;

public interface AdminDao {
	
	List<Admin> getAllAdmins();
	void addNewAdmin(Admin c);
	boolean login(Admin admin);

}