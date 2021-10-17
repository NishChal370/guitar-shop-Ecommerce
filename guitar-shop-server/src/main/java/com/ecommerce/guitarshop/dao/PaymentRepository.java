package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Payment;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
