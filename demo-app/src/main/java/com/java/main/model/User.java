package com.java.main.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // Mention that you want to use this objectto map with database columns
public class User {

	@Id  // Id annotation is used to identify primary key in a table
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column // Column annotation is used to identify a column in database
	// @Column(name="username") use this if you have any other name in your database
	private String name;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + "]";
	}
	
	
}
