package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Buyer;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface BuyerRepository extends JpaRepository<Buyer, Long> {

    Buyer findBuyerByBuyerEmail(String email);

    List<Buyer> findBuyerByBuyerEmailAndBuyerPassword(String email, String password);

//    List<Buyer>
}
