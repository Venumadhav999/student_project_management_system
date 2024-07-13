package com.sample.app.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.app.entity.Project;
import com.sample.app.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins="http://localhost:3000")
public class StudentController {
    private final StudentService studentService;
   

    // Constructor injection
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/projects")
    public ResponseEntity<List<Project>> getAllProjects() {
        List<Project> projects = studentService.getAllProjects();
        return ResponseEntity.ok(projects);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Project> getBlogById(@PathVariable Long id) {
        Project project = studentService.getProjectById(id);
        if (project != null) {
            return ResponseEntity.ok(project);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
   
}
