package com.ecommerce.guitarshop.model;

import lombok.*;
import java.util.List;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders", schema = "guitar_shop")
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ordersId;

    private double totalPrice;



    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "paymentId")
    @JsonBackReference(value = "orders-payment")
    public Payment payment;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shippingId")
    @JsonBackReference(value = "orders-shipping")
    public Shipping shipping;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cartId")
    @JsonBackReference(value = "orders-cart")
    public Cart cart;
}

//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "orders",  fetch = FetchType.LAZY)
//    @JsonManagedReference(value =  "cart-orders")
//    private List<Cart> cart;