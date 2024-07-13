package com.sample.app.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.app.entity.Admin;
import com.sample.app.service.AdminService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins="http://localhost:3000")
public class AdminAuthController {
    private final AdminService adminService;

    public AdminAuthController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/admin/register")
    public ResponseEntity<Admin> registerAdmin(@RequestBody Admin admin) {
        Admin registeredAdmin = adminService.registerAdmin(admin);
        return ResponseEntity.ok(registeredAdmin);
    }

    @PostMapping("/admin/login")
    public ResponseEntity<String> adminLogin(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        Admin admin = adminService.verifyAdmin(email, password);
        if (admin != null) {
            return ResponseEntity.ok("Admin logged in successfully");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Admin authentication failed");
    }
}
