package com.sample.app.service;

import java.util.List;


import org.springframework.stereotype.Service;

import com.sample.app.entity.Admin;
import com.sample.app.entity.Project;
import com.sample.app.repository.AdminRepository;
import com.sample.app.repository.ProjectRepository;

@Service
public class AdminService {
    private final AdminRepository adminRepository;
    private final ProjectRepository projectRepository;

    // Constructor injection
    public AdminService(AdminRepository adminRepository, ProjectRepository projectRepository) {
        this.adminRepository = adminRepository;
        this.projectRepository = projectRepository;
    }

    public Admin findByEmail(String email) {
        return adminRepository.findByEmail(email);
    }

    public Project addProject(Project project) {
                return projectRepository.save(project);
    }
    public void deleteProject(Long id) {
    	projectRepository.deleteById(id);
    }
    public Project updateProjectById(Long id, Project updatedProject) {
        Project existingProject = projectRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Project not found with ID: " + id));

        existingProject.setProjectName(updatedProject.getProjectName());
        existingProject.setTechnologiesUsed(updatedProject.getTechnologiesUsed());
        existingProject.setProjectDescription(updatedProject.getProjectDescription());

        return projectRepository.save(existingProject);
    }
   public List<Project> getAllProjects() {
            return projectRepository.findAll();
        }
        public Admin registerAdmin(Admin admin) {
           
            return adminRepository.save(admin);
        }

        public Admin verifyAdmin(String email, String password) {
            
            return adminRepository.findByEmailAndPassword(email, password);
        }
   

    
    
}
