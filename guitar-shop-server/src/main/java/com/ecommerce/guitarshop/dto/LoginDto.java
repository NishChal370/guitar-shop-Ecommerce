package com.ecommerce.guitarshop.dto;

import lombok.Data;

@Data
public class LoginDto {

    private long adminId;
    private String adminEmail;
    private String adminPassword;

}
