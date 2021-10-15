package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Category;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
