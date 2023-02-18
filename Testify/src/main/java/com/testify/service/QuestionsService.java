package com.testify.service;

import java.util.List;

import com.testify.domain.Questions;

public interface QuestionsService {

	List<Questions> getAllQuestionsService();
	void addNewQuestionService(Questions q);
	List<Questions> getJAVAQuestionsService();
	List<Questions> getSQLQuestionsService();
	List<Questions> getPHPQuestionsService();
	List<Questions> getPYTHONQuestionsService();
	List<Questions> getCNCPPQuestionsService();
	List<Questions> getCNETQuestionsService();

	void deleteQuestionService(int qId);
}
