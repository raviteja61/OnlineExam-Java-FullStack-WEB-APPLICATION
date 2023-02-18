package com.testify.service;

import java.util.List;


import com.testify.domain.Admin;

public interface AdminService {
List<Admin> getAllAdminService();
void addAdminService(Admin c);
boolean login(Admin admin);

}
