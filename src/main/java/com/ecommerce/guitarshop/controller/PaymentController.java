package com.ecommerce.guitarshop.controller;

import java.util.List;
import com.ecommerce.guitarshop.model.Payment;
import com.ecommerce.guitarshop.service.PaymentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class PaymentController {
    @Autowired
    private PaymentService service;

    @GetMapping("/payments")
    private List<Payment> getAll(){
        return service.getAll();
    }

    @GetMapping("/paymentById/{id}")
    private Payment getById(@PathVariable Long id){
        return service.getById(id);
    }

    @PostMapping("/savePayment")
    public ResponseEntity<Payment> setPayment(@RequestBody Payment payment){
        return new ResponseEntity<Payment>(
                service.save(payment), HttpStatus.CREATED);
    }

    @PutMapping("/updatePayment/{id}")
    public ResponseEntity<Payment> updatePayment(@PathVariable Long id, @RequestBody Payment payment){
        return new ResponseEntity<Payment>(
                service.updatePayment(id, payment), HttpStatus.CREATED);
    }

    @DeleteMapping("/deletePaymentById/{id}")
    public String deletePayment(@PathVariable Long id){
        return service.deleteById(id);
    }

    @DeleteMapping("/deletePayment")
    public String deleteAll(){
        return service.deleteAll();
    }
}
