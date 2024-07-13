package com.sample.app.controller;

import java.util.List;



import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


import com.sample.app.entity.Project;
import com.sample.app.service.AdminService;



@RestController
@RequestMapping("/admin")
@CrossOrigin(origins="http://localhost:3000")
public class AdminController {
    private final AdminService adminService;

    // Constructor injection
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }
    @PostMapping("/addProject")
    public ResponseEntity<Project> addProject(@RequestBody Project project) {
    	 Project project_ = adminService.addProject(project);
         return ResponseEntity.ok(project_);
   
    }
    @GetMapping("/projects")
    public ResponseEntity<List<Project>> getAllProjects() {
        List<Project> projects = adminService.getAllProjects();
        return ResponseEntity.ok(projects);
    }
    @DeleteMapping("/delete/project/{id}")
	public void deleteProject(@PathVariable Long id)
	{
		adminService.deleteProject(id);
	}
	@PutMapping("/update/project/{id}")
	public Project updateProject(@PathVariable Long id,@RequestBody Project project)
	{
		return adminService.updateProjectById(id,project);
	}
  
}
