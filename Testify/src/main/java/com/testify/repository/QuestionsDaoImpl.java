package com.testify.repository;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import org.springframework.stereotype.Repository;
import com.testify.domain.Questions;

@Repository
@Transactional
public class QuestionsDaoImpl implements QuestionsDao {

	@PersistenceContext
	private EntityManager em;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Questions> getAllQuestions() {
		Query q = em.createNamedQuery("allQuestions", Questions.class);
		List<Questions> ques = q.getResultList();
		return ques;
	}

	@Override
	public void addNewQuestion(Questions q) {
		em.persist(q);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Questions> getJAVAQuestions() {
		Query q = em.createNamedQuery("JAVAQuestions", Questions.class);
		List<Questions> quesJava = q.getResultList();
		return quesJava;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Questions> getSQLQuestions() {
		Query q = em.createNamedQuery("SQLQuestions", Questions.class);
		List<Questions> quesSQL = q.getResultList();
		return quesSQL;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Questions> getPHPQuestions() {
		Query q = em.createNamedQuery("PHPQuestions", Questions.class);
		List<Questions> quesPHP = q.getResultList();
		return quesPHP;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Questions> getPYTHONQuestions() {
		Query q = em.createNamedQuery("PYTHONQuestions", Questions.class);
		List<Questions> quesPYTHON = q.getResultList();
		return quesPYTHON;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Questions> getCNCPPQuestions() {
		Query q = em.createNamedQuery("CNCPPQuestions", Questions.class);
		List<Questions> quesCNCPP = q.getResultList();
		return quesCNCPP;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Questions> getCNETQuestions() {
		Query q = em.createNamedQuery("CNETQuestions", Questions.class);
		List<Questions> quesCNET = q.getResultList();
		return quesCNET;
	}

	@Override
	public void deleteQuestion(int qId) {
		Questions q = em.find(Questions.class, qId);
		if(q != null) {
			em.remove(q);

		}
		
	}

}
