package com.ecommerce.guitarshop.dto;

import com.ecommerce.guitarshop.model.Admin;
import com.ecommerce.guitarshop.model.Category;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import javax.validation.constraints.NotEmpty;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductPostDto {

    private long productId;

    @NotEmpty
    private String name;

    @NotEmpty
    private String type;

    @NotEmpty
    private String detail;

    @NotEmpty
    private String feature;

    @NotEmpty
    private double price;

    @NotEmpty
    private int productQuantity;

    @NotEmpty
    private String productCompany;

    private Admin admin;

    private Category category;
}
