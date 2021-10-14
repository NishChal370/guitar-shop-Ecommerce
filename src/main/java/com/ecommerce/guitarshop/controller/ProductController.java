package com.ecommerce.guitarshop.controller;

import com.ecommerce.guitarshop.model.Product;
import com.ecommerce.guitarshop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    private ProductService service;

    @GetMapping("/product")
    private List<Product> getAll(){
        return service.getAll();
    }

    @GetMapping("/productById/{id}")
    private Product getById(@PathVariable Long id){
        System.out.println("->>>> "+id);
        return service.getById(id);
    }

    @PostMapping("/saveProduct")
    public ResponseEntity<Product> setProduct(@RequestBody Product product){
        return new ResponseEntity<Product>(
                service.save(product), HttpStatus.CREATED);
    }

    @PostMapping("/saveProducts")
    public ResponseEntity<List<Product>> setProducts(@RequestBody List<Product> products){
        return new ResponseEntity<List<Product>>(
                service.saveAll(products), HttpStatus.CREATED);
    }

    @PutMapping("/updateProduct/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product){
        return new ResponseEntity<Product>(
                service.updateProduct(id, product), HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteProductById/{id}")
    public String deleteProduct(@PathVariable Integer id){
        return service.deleteById(id);
    }

    @DeleteMapping("/deleteProduct")
    public String deleteAll(){
        return service.deleteAll();
    }
}
