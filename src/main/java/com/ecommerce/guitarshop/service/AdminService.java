package com.ecommerce.guitarshop.service;

import com.ecommerce.guitarshop.dao.AdminRepository;
import com.ecommerce.guitarshop.model.Admin;
import com.ecommerce.guitarshop.model.Buyer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public Admin saveAdmin(Admin admin){
        return adminRepository.save(admin);
    }

    public List<Admin> getAllAdmin(){
        return adminRepository.findAll();
    }

    public Admin updateAdmin(Long id, Admin updatedAdmin){
        Admin existingAdmin = adminRepository.findById(id).orElseThrow(EntityNotFoundException::new);

        existingAdmin.setAdminName(updatedAdmin.getAdminName());
        existingAdmin.setAdminPassword(updatedAdmin.getAdminPassword());
        existingAdmin.setEmail(updatedAdmin.getEmail());

        return adminRepository.save(existingAdmin);
    }

    public String deleteAdminById(long id){
        adminRepository.deleteById(id);

        return "ID: "+id+" deleted";
    }

    public String deleteAllAdmin(){
        adminRepository.deleteAll();

        return "All Admin deleted";
    }

}
