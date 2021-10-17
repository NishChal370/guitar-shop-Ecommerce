package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Admin;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
}
