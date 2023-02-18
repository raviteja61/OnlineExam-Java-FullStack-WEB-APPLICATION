package com.testify.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.testify.domain.Questions;
import com.testify.repository.QuestionsDao;

@Component
@Transactional
public class QuestionsServiceImpl implements QuestionsService{

	@Autowired
	private QuestionsDao questionsDao;

	@Override
	public List<Questions> getAllQuestionsService() {
		return questionsDao.getAllQuestions();
	}

	@Override
	public void addNewQuestionService(Questions q) {
		questionsDao.addNewQuestion(q);		
	}

	@Override
	public List<Questions> getJAVAQuestionsService() {
		return questionsDao.getJAVAQuestions();
	}

	@Override
	public List<Questions> getSQLQuestionsService() {
		return questionsDao.getSQLQuestions();
	}

	@Override
	public List<Questions> getPHPQuestionsService() {
		return questionsDao.getPHPQuestions();
	}

	@Override
	public List<Questions> getPYTHONQuestionsService() {
		return questionsDao.getPYTHONQuestions();
	}

	@Override
	public List<Questions> getCNCPPQuestionsService() {
		return questionsDao.getCNCPPQuestions();
	}

	@Override
	public List<Questions> getCNETQuestionsService() {
		return questionsDao.getCNETQuestions();
	}

	@Override
	public void deleteQuestionService(int qId) {
		questionsDao.deleteQuestion(qId);
		
	}

}
