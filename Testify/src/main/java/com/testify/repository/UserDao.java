package com.testify.repository;

import java.util.List;
import com.testify.domain.UserData;
import com.testify.domain.UserMarks;

public interface UserDao {
	List<UserData> getAllUsers();
	void registerUser(UserData c);
	void resetPassword(UserData u, String email, String newPass);
	boolean login(UserData user);
	List<UserMarks> getMarks();
	void addMarks(UserMarks m);
}
