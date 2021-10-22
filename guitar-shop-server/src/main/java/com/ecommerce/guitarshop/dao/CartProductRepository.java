package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Buyer;
import com.ecommerce.guitarshop.model.CartProduct;
import com.ecommerce.guitarshop.model.CartProductId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartProductRepository extends JpaRepository<CartProduct, Long> {

    CartProduct findByCartProductId(CartProductId cartProductId);
}
