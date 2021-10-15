package com.ecommerce.guitarshop.controller;

import com.ecommerce.guitarshop.model.Cart;
import com.ecommerce.guitarshop.model.Product;
import com.ecommerce.guitarshop.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
public class CartController {
    @Autowired
    private CartService service;

    @GetMapping("/cart")
    private List<Cart> getAll(){
        return service.getAll();
    }

    @GetMapping("/cartById/{id}")
    private Cart getById(@PathVariable Long id){
        return service.getById(id);
    }

    @PostMapping("/saveCart")
    public ResponseEntity<Cart> setCart(@RequestBody Cart cart){
        System.out.println("-> "+cart);
        return new ResponseEntity<Cart>(
                service.save(cart), HttpStatus.CREATED);
    }

    @PutMapping("/updateCart/{id}")
    public ResponseEntity<Cart> updateCart(@PathVariable Long id, @RequestBody Cart cart){
        return new ResponseEntity<Cart>(
                service.updateCart(id, cart), HttpStatus.CREATED);
    }

    @PatchMapping("/updateProductssById/{id}")
    public String updateProductsById(@PathVariable Long id, @RequestBody Product product){
        System.out.println("IN side");
        return service.updateCartById(id, product);
    }

    @DeleteMapping("/deleteCartById/{id}")
    public String deleteCart(@PathVariable Long id){
        return service.deleteById(id);
    }

    @DeleteMapping("/deleteCart")
    public String deleteAll(){
        return service.deleteAll();
    }
}
