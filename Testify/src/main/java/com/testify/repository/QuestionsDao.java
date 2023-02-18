package com.testify.repository;

import java.util.List;
import com.testify.domain.Questions;

public interface QuestionsDao {

	List<Questions> getAllQuestions();
	
	void addNewQuestion(Questions q);
	
	List<Questions> getJAVAQuestions();
	List<Questions> getSQLQuestions();
	List<Questions> getPHPQuestions();
	List<Questions> getPYTHONQuestions();
	List<Questions> getCNCPPQuestions();
	List<Questions> getCNETQuestions();
	
	void deleteQuestion(int qId);
}
