package com.ecommerce.guitarshop.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
public class CartProduct {
    @EmbeddedId
    private CartProductId cartProductId = new CartProductId();

    @ManyToOne
    @MapsId("cartId")
    @JoinColumn(name = "cartId")
    @JsonIgnore
//    @JsonBackReference(value = "cart-cartProduct")
    private Cart cart;

    @ManyToOne
    @MapsId("productId")
    @JoinColumn(name = "productId")
//    @JsonBackReference(value = "product-cartProduct")
    private Product product;

    private int quantity;
}
