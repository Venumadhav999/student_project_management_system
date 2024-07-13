package com.sample.app.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.app.entity.Student;
import com.sample.app.service.StudentService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins="http://localhost:3000")
public class StudentAuthController {
    private final StudentService studentService;

    public StudentAuthController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/student/register")
    public ResponseEntity<Student> registerStudent(@RequestBody Student student) {
        Student registeredStudent = studentService.registerStudent(student);
        return ResponseEntity.ok(registeredStudent);
    }

    @PostMapping("/student/login")
    public ResponseEntity<String> studentLogin(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        Student student = studentService.verifyStudent(email, password);
        if (student != null) {
            return ResponseEntity.ok("Student logged in successfully");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Student authentication failed");
    }
}
