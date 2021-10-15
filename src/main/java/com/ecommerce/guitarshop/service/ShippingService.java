package com.ecommerce.guitarshop.service;


import com.ecommerce.guitarshop.dao.ShippingRepository;
import com.ecommerce.guitarshop.model.Shipping;
import java.util.List;
import javax.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class ShippingService {
    @Autowired
    ShippingRepository shippingRepository;

    public Shipping save(Shipping shipping){
        return shippingRepository.save(shipping);
    }

    public Shipping getById(long id){
        return shippingRepository.findById(id).orElseThrow(EntityNotFoundException::new) ;
    }

    public List<Shipping> getAll(){
        return shippingRepository.findAll();
    }

    public Shipping updateShipping(Long id, Shipping updatedShipping){
        Shipping existingShipping = shippingRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        existingShipping.setAddress(updatedShipping.getAddress());
        existingShipping.setDeliveryDate(updatedShipping.getDeliveryDate());

        return shippingRepository.save(existingShipping);
    }

    public String deleteById(long id){
        shippingRepository.deleteById(id);

        return "ID: "+id+" deleted";
    }

    public String deleteAll(){
        shippingRepository.deleteAll();

        return "All Admin deleted";
    }
}
