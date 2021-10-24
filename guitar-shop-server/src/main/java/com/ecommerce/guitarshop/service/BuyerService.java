package com.ecommerce.guitarshop.service;

import com.ecommerce.guitarshop.dao.BuyerRepository;
import com.ecommerce.guitarshop.model.Buyer;
import java.util.List;
import javax.persistence.EntityNotFoundException;

import com.ecommerce.guitarshop.util.BuyerValidator;
import com.ecommerce.guitarshop.view.ResponseObject;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class BuyerService {

    @Autowired
    BuyerRepository buyerRepository;

    public Buyer save(Buyer buyer){
        return buyerRepository.save(buyer);
    }

    public Object registration(Buyer buyer) {
        /*
         * validate the email
         */
        if (!BuyerValidator.validateEmail(buyer.getBuyerEmail())) {
            return new ResponseObject(5, "This is invaild email!");
        }

        /*
         *validate the first name
         */
        if (!BuyerValidator.validateFirstname(buyer.getBuyerName())) {
            return new ResponseObject(6, "Customer Name Is Not Valid!");
        }
        /*
         * validate last name
         */
        if (!BuyerValidator.validateAddress(buyer.getBuyerAddress())) {

            return new ResponseObject(7, "Address Is Not Valid!");
        }

        /*
         * validate password
         */

        if (!BuyerValidator.validatePassword(buyer.getBuyerPassword())) {
            return new ResponseObject(8, "Invallid password!");
        }

        if (!BuyerValidator.validateMobile(buyer.getBuyerPhone())) {
            return new ResponseObject(10, "Enter Valid Mobile Number!");
        }

        Buyer user = buyerRepository.findBuyerByBuyerEmail(buyer.getBuyerEmail());

        if (user != null) {
            return new ResponseObject(9, "This user already  exists!");
        }

        user = new Buyer();
        user.setBuyerName(buyer.getBuyerName());
        user.setBuyerEmail(buyer.getBuyerEmail());
        user.setBuyerAddress(buyer.getBuyerAddress());
        user.setBuyerPhone(buyer.getBuyerPhone());
        user.setBuyerPassword(buyer.getBuyerPassword());
        buyerRepository.save(user);

        return new ResponseObject(1, "you have sucessfully registered!");
    }

    public Object validate(String email, String password){
        List<Buyer> customers = buyerRepository.findBuyerByBuyerEmailAndBuyerPassword(email, password);
        if(customers.size() != 0){
            return customers;
        }
        else{
            return new ResponseObject(0, "Invalid email or password!");
        }

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
        existingBuyer.setStatus(updatedBuyer.getStatus());

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
