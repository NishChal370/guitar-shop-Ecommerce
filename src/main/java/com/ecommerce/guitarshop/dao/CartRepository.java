package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
