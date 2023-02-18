package com.testify.domain;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "User_Marks")
@NamedQuery(name = "selectMarksData",query = "select u from UserMarks u")
public class UserMarks {

	@Id
	@GeneratedValue
	@Column(name = "Temporary_ID")
	private int tempId;
	
	@Column(name = "Technology_Name")
	private String techName;
	
	@Column(name = "Level_1_Marks")
	private int marks_Lev1;
	
	@Column(name = "Level_2_Marks")
	private int marks_Lev2;
	
	@Column(name = "Level_3_Marks")
	private int marks_Lev3;
	
	@JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "Email_ID")
	private UserData userData;
	
	
	public UserMarks() { }

	public UserMarks(int tempId, String techName, int marks_Lev1, int marks_Lev2, int marks_Lev3) {
		super();
		this.tempId = tempId;
		this.techName = techName;
		this.marks_Lev1 = marks_Lev1;
		this.marks_Lev2 = marks_Lev2;
		this.marks_Lev3 = marks_Lev3;
	}

	public int getTempId() {
		return tempId;
	}

	public void setTempId(int tempId) {
		this.tempId = tempId;
	}

	public String getTechName() {
		return techName;
	}

	public void setTechName(String techName) {
		this.techName = techName;
	}

	public int getMarks_Lev1() {
		return marks_Lev1;
	}

	public void setMarks_Lev1(int marks_Lev1) {
		this.marks_Lev1 = marks_Lev1;
	}

	public int getMarks_Lev2() {
		return marks_Lev2;
	}

	public void setMarks_Lev2(int marks_Lev2) {
		this.marks_Lev2 = marks_Lev2;
	}

	public int getMarks_Lev3() {
		return marks_Lev3;
	}

	public void setMarks_Lev3(int marks_Lev3) {
		this.marks_Lev3 = marks_Lev3;
	}
}
