package com.ecommerce.guitarshop.service;

import com.ecommerce.guitarshop.model.Admin;
import com.ecommerce.guitarshop.dao.AdminRepository;
import java.util.List;
import javax.persistence.EntityNotFoundException;

import com.ecommerce.guitarshop.model.Buyer;
import lombok.ToString;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
@ToString
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public Admin saveAdmin(Admin admin){
        return adminRepository.save(admin);
    }

    public Admin getById(long id){
        return adminRepository.findById(id).orElseThrow(EntityNotFoundException::new) ;
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
        existingAdmin.setStatus(updatedAdmin.getStatus());

        return adminRepository.save(existingAdmin);
    }

    public List<Admin> validate(String email, String password){
        List<Admin> a = adminRepository.getAdminByAdminEmailAndAdminPassword(email, password);
        return a;
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
