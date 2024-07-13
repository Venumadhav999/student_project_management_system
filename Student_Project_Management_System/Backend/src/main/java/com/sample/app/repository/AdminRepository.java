package com.sample.app.repository;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.app.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Serializable> {
    Admin findByEmail(String email);

	Admin findByEmailAndPassword(String email, String password);

	
}
