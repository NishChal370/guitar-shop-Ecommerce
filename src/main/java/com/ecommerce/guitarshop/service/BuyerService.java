package com.ecommerce.guitarshop.service;

import com.ecommerce.guitarshop.dao.BuyerRepository;
import com.ecommerce.guitarshop.model.Buyer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class BuyerService {

    @Autowired
    BuyerRepository buyerRepository;

    public Buyer save(Buyer buyer){
        return buyerRepository.save(buyer);
    }

    public Buyer getById(long id){
        return buyerRepository.findById(id).orElseThrow(EntityNotFoundException::new) ;
    }

    public List<Buyer> getAll(){
        return buyerRepository.findAll();
    }

    public Buyer updateBuyer(Long id, Buyer updatedBuyer){
        Buyer existingBuyer = buyerRepository.findById(id).orElseThrow(EntityNotFoundException::new);

        existingBuyer.setBuyerName(updatedBuyer.getBuyerName());
        existingBuyer.setBuyerAddress(updatedBuyer.getBuyerAddress());
        existingBuyer.setBuyerPhone(updatedBuyer.getBuyerPhone());
        existingBuyer.setBuyerEmail(updatedBuyer.getBuyerEmail());
        existingBuyer.setBuyerPassword(updatedBuyer.getBuyerPassword());

        return buyerRepository.save(existingBuyer);
    }

    public String deleteById(long id){
        buyerRepository.deleteById(id);

        return "ID: "+id+" deleted";
    }

    public String deleteAll(){
        buyerRepository.deleteAll();

        return "All Admin deleted";
    }
}
