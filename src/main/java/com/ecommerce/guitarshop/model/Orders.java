package com.ecommerce.guitarshop.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

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

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "orders",  fetch = FetchType.LAZY)
    @JsonManagedReference(value =  "cart-orders")
    private List<Cart> cart;

    @OneToOne
    @JoinColumn(name = "paymentId")
    @JsonBackReference(value = "orders-payment")
    public Payment payment;

    @OneToOne
    @JoinColumn(name = "shippingId")
    @JsonBackReference(value = "orders-shipping")
    public Shipping shipping;
}

