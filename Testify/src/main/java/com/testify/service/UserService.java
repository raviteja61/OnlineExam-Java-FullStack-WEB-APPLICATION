package com.testify.service;

import java.util.List;
import com.testify.domain.UserData;
import com.testify.domain.UserMarks;

public interface UserService {
	List<UserData> getAllUserService();
	void registerUserService(UserData c);
	boolean login(UserData user);
	void resetPasswordService(UserData u, String email, String newPass);
	List<UserMarks> getMarksService();
	void addMarksService(UserMarks m);
}
