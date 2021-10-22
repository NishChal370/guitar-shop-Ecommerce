package com.ecommerce.guitarshop.dto;

import lombok.Data;
import org.springframework.web.bind.annotation.CrossOrigin;

@Data
public class LoginDto {
    private String adminEmail;
    private String adminPassword;
}
