package com.ecommerce.guitarshop.controller;

import com.ecommerce.guitarshop.model.Admin;
import com.ecommerce.guitarshop.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdminController {

    @Autowired
    private AdminService service;

    @GetMapping("/admin")
    private List<Admin> getAll(){
        return service.getAllAdmin();
    }

    @PostMapping("/saveAdmin")
    public ResponseEntity<Admin> setAdmin(@RequestBody Admin admin){
        return new ResponseEntity<Admin>(
                service.saveAdmin(admin), HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteAdmin/{id}")
    public String deleteAdmin(@PathVariable Integer id){
        return service.deleteAdminById(id);
    }

    @DeleteMapping("/deleteAdmin")
    public String deleteAll(){
        return service.deleteAllAdmin();
    }
}