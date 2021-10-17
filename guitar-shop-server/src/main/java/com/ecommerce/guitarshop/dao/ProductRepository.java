package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Product;
import javax.transaction.Transactional;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Modifying
    @Transactional
    @Query("UPDATE Product p SET p.productQuantity=:productQuantity WHERE p.productId=:productId")
    void updateProductById(@Param("productId") long productId,@Param("productQuantity") int productQuantity);
}
