package com.ecommerce.guitarshop.dto;

import lombok.Data;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
public class LoginDto {

    private long adminId;
    private String adminEmail;
    private String adminPassword;
}
