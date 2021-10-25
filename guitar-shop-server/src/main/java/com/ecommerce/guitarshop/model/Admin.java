package com.ecommerce.guitarshop.model;

import lombok.*;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.Size;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.NotEmpty;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
    private String adminUserName;

    @NotEmpty
    @NotNull
    private String adminFirstName;

    @NotEmpty
    private String adminLastName;

    @Email
    private String adminEmail;

    @NotEmpty
    @Size(max = 8)
    private String adminPassword;

    @NotEmpty
    private Boolean status;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "admin",  fetch = FetchType.LAZY)
    @JsonManagedReference(value =  "admin-product")
    private List<Product> products;
}
