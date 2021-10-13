package com.ecommerce.guitarshop.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;
import java.util.Set;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product", schema = "guitar_shop")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productId;

    @NotEmpty
    private String name;
    @NotEmpty
    private String detail;
    @NotEmpty
    private String type;
    @NotEmpty
    private double price;
    @NotEmpty
    private String image;
    @NotEmpty
    private String productCompany;

    @ManyToOne
    @JoinColumn(name = "adminId")
    @JsonBackReference(value = "admin-product")
    private Admin admin;

    @ManyToOne
    @JoinColumn(name = "categoryId")
    @JsonBackReference(value = "product-category")
    private Category category;

    @ManyToMany(mappedBy = "cartProducts")
    private Set<Cart> carts;
}
