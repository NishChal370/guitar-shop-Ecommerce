package com.ecommerce.guitarshop.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "payment", schema = "guitar_shop")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long paymentId;
    private String paymentType;
    private String paymentStatus;
    private Date paymentDate;

    @OneToOne(mappedBy = "payment")
    @JsonManagedReference(value = "orders-payment")
    private Orders orders;
}