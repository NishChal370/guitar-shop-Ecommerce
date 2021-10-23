package com.ecommerce.guitarshop.dto;

import com.ecommerce.guitarshop.model.Admin;
import com.ecommerce.guitarshop.model.CartProduct;
import com.ecommerce.guitarshop.model.Category;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.Collection;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductGetDto {

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
    private String imageOne;

    @NotEmpty
    private String imageTwo;

    @NotEmpty
    private String imageThree;

    @NotEmpty
    private String productCompany;

}
