package com.testify.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.testify.domain.UserData;
import com.testify.domain.UserMarks;
import com.testify.service.UserService;

@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})
@RestController
@RequestMapping("/users")
public class UserAPI {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(value = "/loginpage")
	public boolean login(@RequestBody UserData user) {
		return userService.login(user);
	}

	@RequestMapping
	public List<UserData> getAllUsers() {
		return userService.getAllUserService();
	}
	
	@RequestMapping(value = "/reports")
	public List<UserMarks> getMarks() {
		return userService.getMarksService();
	}
	
	@PostMapping(value = "/reports")
	public void addMarks(@RequestBody UserMarks m) {
		userService.addMarksService(m);
	}
	
	@RequestMapping(path = "/{email}",method = RequestMethod.PUT )
	public void resetPassword(@RequestBody UserData u, @PathVariable String email, @PathVariable String newPass) {
		userService.resetPasswordService(u, email, newPass);
	}	
	
	@PostMapping
	public void registerUser(@RequestBody UserData c) {
		userService.registerUserService(c);
	}
	
}
