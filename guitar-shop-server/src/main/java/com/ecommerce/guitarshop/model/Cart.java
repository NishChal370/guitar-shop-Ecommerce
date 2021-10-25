package com.ecommerce.guitarshop.model;

import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
    private  Collection<CartProduct> cartProducts = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "buyerId")
    @JsonBackReference(value = "buyer-cart")
    private Buyer buyer;

    @OneToOne(mappedBy = "cart", fetch = FetchType.LAZY)
    @JsonManagedReference(value = "orders-cart")
    private Orders order;

}

