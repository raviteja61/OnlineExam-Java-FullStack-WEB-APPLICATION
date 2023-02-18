package com.testify.service;

import java.util.List;


import com.testify.domain.UserMarks;

public interface UserMarksService {
List<UserMarks> getAllUserMarksService();
void addUserService(UserMarks c);

UserMarks searchUsermarksByIdService(int id);
void updateUserService(UserMarks c,int id);
void addUserMarksService(UserMarks c);
}
