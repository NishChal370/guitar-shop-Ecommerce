package com.ecommerce.guitarshop.controller;

import java.util.List;
import com.ecommerce.guitarshop.model.Orders;
import com.ecommerce.guitarshop.service.OrdersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class OrdersController {
    @Autowired
    private OrdersService service;

    @GetMapping("/orders")
    private List<Orders> getAll(){
        return service.getAll();
    }

    @GetMapping("/orderById/{id}")
    private Orders getById(@PathVariable Long id){
        return service.getById(id);
    }

    @PostMapping("/saveOrder")
    public ResponseEntity<Orders> setOrder(@RequestBody Orders order){
        return new ResponseEntity<Orders>(
                service.save(order), HttpStatus.CREATED);
    }

    @PutMapping("/updateOrder/{id}")
    public ResponseEntity<Orders> updateOrder(@PathVariable Long id, @RequestBody Orders order){
        return new ResponseEntity<Orders>(
                service.updateOrders(id, order), HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteOrderById/{id}")
    public String deleteOrder(@PathVariable Long id){
        return service.deleteById(id);
    }

    @DeleteMapping("/deleteOrders")
    public String deleteAll(){
        return service.deleteAll();
    }
}
