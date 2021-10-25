package com.ecommerce.guitarshop.model;

import lombok.*;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.Size;
import javax.validation.constraints.NotEmpty;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "buyer", schema = "guitar_shop")
public class Buyer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long buyerId;

    @NotEmpty
    private String buyerName;

    @NotEmpty
    private String buyerAddress;

    @NotEmpty
    private String buyerPhone;

    @NotEmpty
    private String buyerEmail;

    @NotEmpty
    @Size(max = 8)
    private String buyerPassword;

    @NotEmpty
    private Boolean status;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "buyer",  fetch = FetchType.LAZY)
    @JsonManagedReference(value =  "buyer-cart")
    private List<Cart> carts;
}