package com.ecommerce.guitarshop.model;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import javax.persistence.Embeddable;

@Data
@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class CartProductId implements Serializable {
    private Long cartId;
    private Long productId;

}
