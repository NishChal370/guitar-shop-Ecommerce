package com.ecommerce.guitarshop.service;

import com.ecommerce.guitarshop.model.Payment;
import com.ecommerce.guitarshop.dao.PaymentRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class PaymentService {
    @Autowired
    PaymentRepository paymentRepository;

    public Payment save(Payment payment){
        return paymentRepository.save(payment);
    }

    public Payment getById(long id){
        return paymentRepository.findById(id).orElseThrow(EntityNotFoundException::new) ;
    }

    public List<Payment> getAll(){
        return paymentRepository.findAll();
    }

    public Payment updatePayment(Long id, Payment updatedPayment){
        Payment existingPayment = paymentRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        existingPayment.setPaymentType(updatedPayment.getPaymentType());
        existingPayment.setPaymentStatus(updatedPayment.getPaymentStatus());
        existingPayment.setPaymentDate(updatedPayment.getPaymentDate());

        return paymentRepository.save(existingPayment);
    }

    public String deleteById(long id){
        paymentRepository.deleteById(id);

        return "ID: "+id+" deleted";
    }

    public String deleteAll(){
        paymentRepository.deleteAll();

        return "All Admin deleted";
    }
}
