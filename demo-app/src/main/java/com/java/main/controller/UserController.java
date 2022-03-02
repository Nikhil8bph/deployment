package com.java.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.java.main.dao.UserDao;
import com.java.main.model.MessageResponse;
import com.java.main.model.User;

@CrossOrigin("*") // specify that request can come from anywhere
@RestController 
public class UserController {

	@Autowired
	UserDao userDao;
	
	@PostMapping("/usertest")
	public User postUser(@RequestBody User user) {
		return userDao.save(user);
	}
	
	@GetMapping("/usertest")
	public List<User> getUser() {
		return userDao.findAll();
	}
	
	@DeleteMapping("/usertest/{id}")
	public ResponseEntity<MessageResponse> deleteUser(@PathVariable("id") int id) {
		try {
			userDao.deleteById(id);
			return ResponseEntity.ok(new MessageResponse("Delete Success id : "+id));
		}
		catch (Exception e) {
			return ResponseEntity.ok(new MessageResponse("Delete Failed id : "+id));
		}
	}
	
	@GetMapping("/usertest/{id}")
	public Optional<User> getOneUser(@PathVariable("id") int id) {
		return userDao.findById(id);
	}
}
