package com.ecommerce.guitarshop.dao;

import com.ecommerce.guitarshop.model.Admin;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    @Query(value = "select * from Admin  where admin_email=:adminEmail and admin_password=:adminPassword", nativeQuery = true)
    List<Admin> getAdminByAdminEmailAndAdminPassword(@Param("adminEmail") String adminEmail , @Param("adminPassword") String adminPassword);
}
