package com.ecommerce.guitarshop.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cart", schema = "guitar_shop")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cartId;
    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
//    @JsonManagedReference(value =  "cart-cartProduct")
    private  Collection<CartProduct> cartProducts = new ArrayList<>();
    //---------
//    @ManyToMany(mappedBy = "carts" , cascade = CascadeType.ALL)
//    private Collection<Product> products = new ArrayList<>();
    //---------
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "buyerId")
    @JsonBackReference(value = "buyer-cart")
    private Buyer buyer;

    @OneToOne(mappedBy = "cart", fetch = FetchType.LAZY)
    @JsonManagedReference(value = "orders-cart")
    private Orders order;

}

