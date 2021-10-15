package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Cart;
import com.ecommerce.guitarshop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Collection;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

}


//@Modifying
//    @Transactional
//    @Query("UPDATE Cart c SET c.products=:products WHERE c.cartId=:cartId")
//    void updateCartById(@Param("cartId") long cartId, @Param("products") Collection<Product> products);