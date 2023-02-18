package com.testify.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="User_Data")
@SequenceGenerator(name="user_id_seq", initialValue=8, allocationSize=100)
@NamedQuery(name = "selectUserData",query = "select u from UserData u")
public class UserData {
	
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="user_id_seq")
	@Column(name="User_ID")
	private int id;	
	
	@Column(name="First_Name")
	private String firstName;
	
	@Column(name="Last_Name")
	private String lastName;
	
	@Id
	@Column(name="Email_ID")
	private String email;
	
	@Column(name="Password")
	private String password;
	
	@Column(name="Phone_Number")
	private int  phonenumber;
	
	@Column(name="State")
	private String state;
	
	@Column(name="City")
	private String city;
	
	@Column(name="Qualification")
	private String qualification;
	
	@Column(name="Year_Of_Passing")
	private int yearofpassing;

	@OneToMany(cascade = CascadeType.PERSIST, mappedBy = "userData")
	@JsonIgnore
	private List<UserMarks> userMarks;
	
	public UserData() {}

	public UserData(int id, String firstName, String lastName, String email, String password, int phonenumber, String state,
			String city, String qualification, int yearofpassing, List<UserMarks> userMarks) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phonenumber = phonenumber;
		this.state = state;
		this.city = city;
		this.qualification = qualification;
		this.yearofpassing = yearofpassing;
		this.userMarks = userMarks;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(int phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public int getYearofpassing() {
		return yearofpassing;
	}

	public void setYearofpassing(int yearofpassing) {
		this.yearofpassing = yearofpassing;
	}

		public List<UserMarks> getUserMarks() {
		return userMarks;
	}

	public void setUserMarks(List<UserMarks> userMarks) {
		this.userMarks = userMarks;
	}
	
}
