package com.ecommerce.guitarshop.controller;

import java.util.List;
import java.util.Collection;
import com.ecommerce.guitarshop.model.Cart;
import com.ecommerce.guitarshop.model.CartProduct;
import com.ecommerce.guitarshop.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
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
        return new ResponseEntity<Cart>(
                service.save(cart), HttpStatus.CREATED);
    }

    @PutMapping("/updateCart/cartId={cartId}/productId={productId}/quantity={quantity}")
    public ResponseEntity<Collection<CartProduct>> updateCartQuantityById(@PathVariable Long cartId, @PathVariable Long productId, @PathVariable int quantity){
        return new ResponseEntity<Collection<CartProduct>>(
                service.updateCartQuantityById(cartId, productId, quantity), HttpStatus.CREATED);
    }

    @PatchMapping("/updateCartProductsById/{id}")
    public String updateCartProductsById(@PathVariable Long id, @RequestBody CartProduct cartProduct){

        return service.updateCartProductById(id, cartProduct);
    }

    @DeleteMapping("/deleteCartById/cartId={cartId}/productId={productId}")
    public String deleteCart(@PathVariable Long cartId, @PathVariable Long productId){

        return service.deleteCartProductById(cartId, productId);
    }

    @DeleteMapping("/deleteCart")
    public String deleteAll(){
        return service.deleteAll();
    }
}
