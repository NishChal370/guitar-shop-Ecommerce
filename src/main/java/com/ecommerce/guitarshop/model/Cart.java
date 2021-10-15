package com.ecommerce.guitarshop.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import java.util.*;
import javax.persistence.*;

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

    @ManyToMany(mappedBy = "carts" , cascade = CascadeType.ALL)
    private Collection<Product> products = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "buyerId")
    @JsonBackReference(value = "buyer-cart")
    private Buyer buyer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ordersId")
    @JsonBackReference(value = "cart-orders")
    private Orders orders;

}
