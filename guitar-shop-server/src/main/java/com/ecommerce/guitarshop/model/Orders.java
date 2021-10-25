package com.ecommerce.guitarshop.model;

import lombok.*;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;


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
