package com.sample.app.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.app.entity.Admin;
import com.sample.app.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Serializable> {
    List<Project> findByAdmin(Admin admin);
}
