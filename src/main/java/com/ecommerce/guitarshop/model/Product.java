package com.ecommerce.guitarshop.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
//@ToString
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
    private int productQuantity;
    @NotEmpty
    private String image;
    @NotEmpty
    private String productCompany;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "adminId")
    @JsonBackReference(value = "admin-product")
    private Admin admin;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoryId")
    @JsonBackReference(value = "product-category")
    private Category category;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "cart_products",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "cart_id")
    )
    @JsonIgnore
    private  Collection<Cart> carts = new ArrayList<>();

}

