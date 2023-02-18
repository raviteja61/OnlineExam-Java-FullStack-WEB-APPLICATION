package com.testify.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.testify.domain.Questions;
import com.testify.service.QuestionsService;

@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE})
@RestController
@RequestMapping("/questions")
public class QuestionsAPI {

	@Autowired
	private QuestionsService questionsService;
	
	@RequestMapping
	public List<Questions> getAllQuestions() {
		return questionsService.getAllQuestionsService();
	}
	
	@PostMapping
	public void addNewQuestion(@RequestBody Questions q) {
		questionsService.addNewQuestionService(q);
	}
	
	@RequestMapping("/JAVA")
	public List<Questions> getJAVAQuestions() {
		return questionsService.getJAVAQuestionsService();
	}
	
	@RequestMapping("/SQL")
	public List<Questions> getSQLQuestions() {
		return questionsService.getSQLQuestionsService();
	}
	
	@RequestMapping("/PHP")
	public List<Questions> getPHPQuestions() {
		return questionsService.getPHPQuestionsService();
	}
	
	@RequestMapping("/PYTHON")
	public List<Questions> getPYTHONQuestions() {
		return questionsService.getPYTHONQuestionsService();
	}
	
	@RequestMapping("/CNCPP")
	public List<Questions> getCNCPPQuestions() {
		return questionsService.getCNCPPQuestionsService();
	}
	
	@RequestMapping("/CNET")
	public List<Questions> getCNETQuestions() {
		return questionsService.getCNETQuestionsService();
	}
	
	@DeleteMapping("/{qId}")
	public void deleteQuestion(@PathVariable("qId") int qId) {
		questionsService.deleteQuestionService(qId);
	}
}
