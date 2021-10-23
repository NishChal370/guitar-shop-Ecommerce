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


//{
//        "name":"guitar 9",
//        "detail":"this is guitar 9",
//        "feature":"good sound. best then then other. easy to play.",
//        "type":"acoustic",
//        "price":9083730,
//        "imageOne":"https://www.musicplanet.co.nz/media/catalog/product/cache/10ed2402b0fb54f5493482f6afd7ac5a/t/2/t20ce_pro.jpg",
//        "imageTwo":"",
//        "imageThree":"",
//        "productCompany":"mantra",
//        "admin":{
//        "adminId":1
//        },
//        "category":{
//        "categoryId":1
//        }

//        }
