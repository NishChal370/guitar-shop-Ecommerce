package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Buyer;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface BuyerRepository extends JpaRepository<Buyer, Long> {
}
