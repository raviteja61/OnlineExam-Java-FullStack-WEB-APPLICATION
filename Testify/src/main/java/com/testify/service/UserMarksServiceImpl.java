package com.testify.service;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.testify.domain.UserMarks;
@Component
@Transactional
public class UserMarksServiceImpl  implements UserMarksService{

	@Override
	public List<UserMarks> getAllUserMarksService() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addUserService(UserMarks c) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public UserMarks searchUsermarksByIdService(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateUserService(UserMarks c, int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addUserMarksService(UserMarks c) {
		// TODO Auto-generated method stub
		
	}

	
}
