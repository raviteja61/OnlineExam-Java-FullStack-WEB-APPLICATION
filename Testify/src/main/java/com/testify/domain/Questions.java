package com.testify.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

@Entity
@NamedQuery(name = "allQuestions", query = "select q from Questions q")
@NamedQuery(name = "JAVAQuestions", query = "select q from Questions q where q.subject ='JAVA'")
@NamedQuery(name = "SQLQuestions", query = "select q from Questions q where q.subject ='SQL'")
@NamedQuery(name = "PHPQuestions", query = "select q from Questions q where q.subject ='PHP'")
@NamedQuery(name = "PYTHONQuestions", query = "select q from Questions q where q.subject ='PYTHON'")
@NamedQuery(name = "CNCPPQuestions", query = "select q from Questions q where q.subject ='CNCPP'")
@NamedQuery(name = "CNETQuestions", query = "select q from Questions q where q.subject ='CNET'")
public class Questions {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int qId;
	
	private String questionText;
	private String answer;
	private String subject;
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	
	public int getqId() {
		return qId;
	}

	public void setqId(int qId) {
		this.qId = qId;
	}

	public String getQuestionText() {
		return questionText;
	}

	public void setQuestionText(String questionText) {
		this.questionText = questionText;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}
	
}
