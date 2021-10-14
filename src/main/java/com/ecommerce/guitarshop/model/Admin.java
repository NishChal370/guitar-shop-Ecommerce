package com.ecommerce.guitarshop.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "admin", schema = "guitar_shop")
public class Admin {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private long adminId;

    @NotEmpty
    private String adminName;

    @Email
    private String email;

    @NotEmpty
    @Size(max = 8)
    private String adminPassword;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "admin",  fetch = FetchType.LAZY)
    @JsonManagedReference(value =  "admin-product")
    private List<Product> products;
}
