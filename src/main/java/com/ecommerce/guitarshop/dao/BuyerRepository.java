package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuyerRepository extends JpaRepository<Buyer, Long> {
}
