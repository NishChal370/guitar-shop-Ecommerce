package com.ecommerce.guitarshop.model;

import lombok.Data;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@Entity
public class CartProduct {
    @EmbeddedId
    private CartProductId cartProductId = new CartProductId();

    @ManyToOne
    @MapsId("cartId")
    @JoinColumn(name = "cartId")
    @JsonIgnore
    private Cart cart;

    @ManyToOne
    @MapsId("productId")
    @JoinColumn(name = "productId")
    private Product product;

    private int quantity;
}
