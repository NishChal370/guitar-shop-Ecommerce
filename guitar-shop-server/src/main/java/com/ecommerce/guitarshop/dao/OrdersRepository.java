package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Orders;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Long> {
}
