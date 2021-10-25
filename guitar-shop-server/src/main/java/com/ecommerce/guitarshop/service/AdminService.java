package com.ecommerce.guitarshop.service;

import com.ecommerce.guitarshop.dto.LoginDto;
import com.ecommerce.guitarshop.mapper.LoginMapper;
import com.ecommerce.guitarshop.model.Admin;
import com.ecommerce.guitarshop.dao.AdminRepository;
import com.ecommerce.guitarshop.view.ResponseObject;

import lombok.ToString;
import java.util.List;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;

@Service
@ToString
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private LoginMapper loginMapper;

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

    public Object validate(String email, String password){
        List<Admin> admins = adminRepository.getAdminByAdminEmailAndAdminPassword(email, password);
        if(admins.size() != 0){
            return loginMapper.INSTANCE.modelsToDto(admins);
        }
        else{
            return new ResponseObject(0, "Invalid email or password!");
        }

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
