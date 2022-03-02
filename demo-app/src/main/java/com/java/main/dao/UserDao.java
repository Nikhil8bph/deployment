package com.java.main.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.main.model.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
	
}

// JpaRepository is an interface 