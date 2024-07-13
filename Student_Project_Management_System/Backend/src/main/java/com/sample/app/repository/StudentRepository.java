package com.sample.app.repository;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.app.entity.Student;

public interface StudentRepository extends JpaRepository<Student,Serializable> {

	Student findByEmailAndPassword(String email, String password);
    // Add custom queries for Student if needed
}
