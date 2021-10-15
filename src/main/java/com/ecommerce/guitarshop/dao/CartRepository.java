package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Cart;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
}