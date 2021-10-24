package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.CartProduct;
import com.ecommerce.guitarshop.model.CartProductId;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface CartProductRepository extends JpaRepository<CartProduct, Long> {

    CartProduct findByCartProductId(CartProductId cartProductId);

    void deleteByCartProductId(CartProductId cartProductId);
}
