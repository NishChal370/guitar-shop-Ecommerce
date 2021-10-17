package com.ecommerce.guitarshop.service;

import com.ecommerce.guitarshop.model.Admin;
import com.ecommerce.guitarshop.dao.AdminRepository;
import java.util.List;
import javax.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

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

        existingAdmin.setAdminUserName(updatedAdmin.getAdminUserName());
        existingAdmin.setAdminFirstName(updatedAdmin.getAdminFirstName());
        existingAdmin.setAdminLastName(updatedAdmin.getAdminLastName());
        existingAdmin.setAdminPassword(updatedAdmin.getAdminPassword());
        existingAdmin.setAdminEmail(updatedAdmin.getAdminEmail());

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
