package com.ecommerce.guitarshop.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import javax.validation.constraints.NotEmpty;

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
