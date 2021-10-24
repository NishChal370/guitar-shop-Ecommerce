package com.ecommerce.guitarshop.controller;

import java.util.List;
import com.ecommerce.guitarshop.model.Buyer;
import com.ecommerce.guitarshop.service.BuyerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BuyerController {
    @Autowired
    private BuyerService service;

    @GetMapping("/buyer")
    private List<Buyer> getAll(){
        return service.getAll();
    }

    @GetMapping("/buyerById/{id}")
    private Buyer getById(@PathVariable Long id){
        return service.getById(id);
    }

    //----
//    @PostMapping("/saveBuyer")
//    public ResponseEntity<Buyer> setBuyer(@RequestBody Buyer buyer){
//        return new ResponseEntity<Buyer>(
//                service.save(buyer), HttpStatus.CREATED);
//    }
    ///-------


    @PostMapping("/saveCustomer")
    public Object setCustomer(@Valid @RequestBody Buyer buyer){
        return service.registration(buyer);
    }
//
    @GetMapping("/customer/login")
    public Object loginCustomer(@RequestParam("customerEmail") String customerEmail,@RequestParam("customerPassword") String customerPassword){
        return service.validate(customerEmail, customerPassword);
    }

    @PutMapping("/updateBuyer/{id}")
    public ResponseEntity<Buyer> updateBuyer(@PathVariable Long id, @RequestBody Buyer buyer){
        return new ResponseEntity<Buyer>(
                service.updateBuyer(id, buyer), HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteBuyerById/{id}")
    public String deleteBuyer(@PathVariable Long id){
        return service.deleteById(id);
    }

    @DeleteMapping("/deleteBuyer")
    public String deleteAll(){
        return service.deleteAll();
    }
}
