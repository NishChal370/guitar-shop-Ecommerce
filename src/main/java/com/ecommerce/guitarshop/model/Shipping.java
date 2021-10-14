package com.ecommerce.guitarshop.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "shipping", schema = "guitar_shop")
public class Shipping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long shippingId;
    private String address;
    private Date deliveryDate;

    @OneToOne(mappedBy = "shipping", fetch = FetchType.LAZY)
    @JsonManagedReference(value = "orders-shipping")
    private Orders orders;
}
