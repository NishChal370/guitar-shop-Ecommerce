package com.ecommerce.guitarshop.service;

import com.ecommerce.guitarshop.dto.LoginDto;
import com.ecommerce.guitarshop.mapper.LoginMapper;
import com.ecommerce.guitarshop.model.Admin;
import com.ecommerce.guitarshop.dao.AdminRepository;
import java.util.List;
import java.util.Objects;
import javax.persistence.EntityNotFoundException;

import com.ecommerce.guitarshop.model.Buyer;
import com.ecommerce.guitarshop.view.ResponseObject;
import lombok.ToString;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
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

//    public ResponseEntity<List<LoginDto>> validate(String email, String password){
//        List<Admin> admins = adminRepository.getAdminByAdminEmailAndAdminPassword(email, password);
//        if(admins.size() != 0){
//            return new ResponseEntity<List<LoginDto>>(
//                    loginMapper.modelsToDto(admins), HttpStatus.FOUND);
//        }
//        else{
//            return new ResponseEntity<List<LoginDto>>(
//                    loginMapper.modelsToDto(admins), HttpStatus.NOT_FOUND);
////            return new ResponseObject(0, "Invalid email or password!");
//        }
//
//    }


    //from aj
    public Object validate(String email, String password){
        List<Admin> admins = adminRepository.getAdminByAdminEmailAndAdminPassword(email, password);
        if(admins.size() != 0){
            return loginMapper.INSTANCE.modelsToDto(admins);
        }
        else{
            return new ResponseObject(0, "Invalid email or password!");
        }

    }

//     this is correct-->
//    public List<LoginDto> validate(String email, String password){
//        List<Admin> admins = adminRepository.getAdminByAdminEmailAndAdminPassword(email, password);
//        return loginMapper.modelsToDto(admins);
//    }
//    <--


//    public List<Admin> validate(String email, String password){
//        List<Admin> admins = adminRepository.getAdminByAdminEmailAndAdminPassword(email, password);
//        return admins;
//    }


    public String deleteAdminById(long id){
        adminRepository.deleteById(id);

        return "ID: "+id+" deleted";
    }

    public String deleteAllAdmin(){
        adminRepository.deleteAll();

        return "All Admin deleted";
    }

}
