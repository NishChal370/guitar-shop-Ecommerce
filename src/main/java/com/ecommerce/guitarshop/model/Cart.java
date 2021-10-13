package com.ecommerce.guitarshop.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cart", schema = "guitar_shop")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cartId;

    private int quantity;

    @ManyToMany
    @JoinTable(
            name = "cart_products",
            joinColumns = @JoinColumn(name = "cart_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private Set<Product> cartProducts;

    @ManyToOne
    @JoinColumn(name = "buyerId")
    @JsonBackReference(value = "buyer-cart")
    private Buyer buyer;

    @ManyToOne
    @JoinColumn(name = "ordersId")
    @JsonBackReference(value = "cart-orders")
    private Orders orders;

}
