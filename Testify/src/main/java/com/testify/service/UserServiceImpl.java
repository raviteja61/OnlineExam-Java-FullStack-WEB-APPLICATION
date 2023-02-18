package com.testify.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import com.testify.domain.UserData;
import com.testify.domain.UserMarks;
import com.testify.repository.UserDao;
@Component
@Transactional
public class UserServiceImpl  implements UserService{
	@Autowired
	private UserDao userdao;
	
	@Override
	
	public List<UserData> getAllUserService() {
		return userdao.getAllUsers();
	}

	@Override
	public void registerUserService(UserData c) {
		 userdao.registerUser(c);
		
	}
	
	@Override
	public boolean login(UserData user) {
		return userdao.login(user);
	}

	@Override
	public void resetPasswordService(UserData u, String email, String newPass) {
		userdao.resetPassword(u, email, newPass);
	}

	@Override
	public List<UserMarks> getMarksService() {
		return userdao.getMarks();
	}

	@Override
	public void addMarksService(UserMarks m) {
		userdao.addMarks(m);
	}

}
