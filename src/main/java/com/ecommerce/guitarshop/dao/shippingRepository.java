package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Shipping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface shippingRepository extends JpaRepository<Shipping, Long> {
}
