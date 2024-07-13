package com.sample.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.sample.app.entity.Project;
import com.sample.app.entity.Student;
import com.sample.app.repository.ProjectRepository;
import com.sample.app.repository.StudentRepository;

@Service
public class StudentService {
    private final ProjectRepository projectRepository;
    private final StudentRepository studentRepository;

    // Constructor injection
    private StudentService(ProjectRepository projectRepository, StudentRepository studentRepository) {
		super();
		this.projectRepository = projectRepository;
		this.studentRepository = studentRepository;
	}

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }
    
    

    public Project getProjectById(Long id) {
        Optional<Project> optionalproject = projectRepository.findById(id);
        return optionalproject.orElse(null);
    }

    public Student registerStudent(Student student) {
        // Logic to save student to the repository
        // You may add further validation or hashing for the password
        return studentRepository.save(student);
    }

    public Student verifyStudent(String email, String password) {
        // Logic to verify student credentials
        return studentRepository.findByEmailAndPassword(email, password);
    }
}

