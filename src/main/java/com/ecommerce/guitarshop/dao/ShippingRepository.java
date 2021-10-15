package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Shipping;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ShippingRepository extends JpaRepository<Shipping, Long> {
}
