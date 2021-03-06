package com.ecommerce.guitarshop.controller;

import java.util.List;
import com.ecommerce.guitarshop.model.Admin;
import com.ecommerce.guitarshop.service.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.annotation.Validated;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class AdminController {

    @Autowired
    private AdminService service;

    @GetMapping("/admin")
    private List<Admin> getAll(){
        return service.getAllAdmin();
    }

    @GetMapping("/adminById/{id}")
    private Admin getById(@PathVariable Long id){
        return service.getById(id);
    }

    @PostMapping("/saveAdmin")
    public ResponseEntity<Admin> setAdmin(@Valid @RequestBody Admin admin){
        return new ResponseEntity<Admin>(
                service.saveAdmin(admin), HttpStatus.CREATED);
    }

    @GetMapping("/admin/login")
    public Object loginAdmin(@RequestParam("adminEmail") String adminEmail,@RequestParam("adminPassword") String adminPassword){
        return service.validate(adminEmail, adminPassword);
    }

    @DeleteMapping("/deleteAdmin/{id}")
    public String deleteAdmin(@PathVariable Long id){
        return service.deleteAdminById(id);
    }

    @DeleteMapping("/deleteAdmin")
    public String deleteAll(){
        return service.deleteAllAdmin();
    }
}
