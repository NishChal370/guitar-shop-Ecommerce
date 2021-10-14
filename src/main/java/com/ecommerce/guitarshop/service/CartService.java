package com.ecommerce.guitarshop.service;

import com.ecommerce.guitarshop.dao.CartRepository;
import com.ecommerce.guitarshop.dao.PaymentRepository;
import com.ecommerce.guitarshop.model.Cart;
import com.ecommerce.guitarshop.model.Product;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.LongStream;
import java.util.stream.Stream;

@Service
@ToString
public class CartService {

    @Autowired
    CartRepository cartRepository;

    @Autowired
    ProductService productService;

    public Cart save(Cart cart){

//        Cart newCart = new Cart();
//        newCart.setQuantity(cart.getQuantity());
//        newCart.setBuyer(cart.getBuyer());
//        newCart.setOrders(cart.getOrders());
//        newCart.getProducts().addAll(
//                cart.getProducts()
//                        .stream()
//                        .map(p->{
//                            Product pp = productService.getById(p.getProductId());
//                            pp.getCarts().add(newCart);
//                            return pp;
//                        }).collect(Collectors.toList()));
//        return cartRepository.save(newCart);
//        System.out.println("-->> "+cart);
//        List<Long> a = cart.getProducts().stream().map(Product::getProductId).collect(Collectors.toList());
//        System.out.println(a);
//        Long productIndex = null;
//        Set<Product> proSet = new HashSet<>();

//        System.out.println(cart.getProducts().);
//        for (long i:a) {
//            System.out.println("INDEXXX "+i);
//            productIndex = i;
//            proSet.add(productService.getById(productIndex));
////            System.out.println(i);
////            pp = productService.getById(i);
//        }
//        System.out.println("Index "+ productIndex);
//         Product pp =productService.getById(productIndex);

////        System.out.println("CROSSERS-<<><><><><><>"+proSet);
//        System.out.println(cart.getBuyer());
//        System.out.println(cart.getOrders());

//        System.out.println( productService.getById(1) );
//        }
//        System.out.println("=>>> "+cart.getBuyer().getBuyerId());
//        System.out.println("-> "+productService.getById(1));
//        Cart newCart = new Cart();
//        System.out.println("--->>>>>1 "+cart);
//        System.out.println(cart.getProducts().stream().map(Product::getProductId).toString());

//        newCart.setCartId((cart.getCartId()));
//        System.out.println("--->>>>> 2"+cart.getCartId());
//        newCart.setBuyer(cart.getBuyer());
//        System.out.println("--->>>>> 3"+cart.getBuyer());
//        newCart.setOrders(cart.getOrders());
//        System.out.println("--->>>>> 4"+cart.getOrders());
//        newCart.setQuantity(cart.getQuantity());
//        System.out.println("--->>>>> 5"+cart.getQuantity());

//        newCart.setProducts(cart.getProducts().stream().map(e->productService.getById(e.getProductId())).collect(Collectors.toSet()));
//        System.out.println("=>>> "+cart.getCartProducts());
//        Collection<Product> p = cart.getCartProducts();
//        System.out.println(p.stream().map(e-> (e.getDetail()).toString()).reduce("", String::concat));
//        LongStream pId = p.stream().mapToLong(e-> e.getProductId());

//        Cart newCart = new Cart();
//        newCart.setCartId((cart.getCartId()));
//        newCart.setQuantity(cart.getQuantity());
//        newCart.setBuyer(cart.getBuyer());
//        newCart.setOrders(cart.getOrders());
//        newCart.setProducts(proSet);
//        System.out.println(newCart);
//        System.out.println(newCart);
////        return customerRepository.save(newCustomer);
//        return cartRepository.save(newCart);
//        productService.
//        System.out.println("--->>>>> 6"+newCart);
//        return null;
        return null;
    }

    public Cart getById(long id){
        return cartRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public List<Cart> getAll(){
        return cartRepository.findAll();
    }

    public Cart updateCart(Long id, Cart updatedCart){
        Cart existingCart = cartRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        existingCart.setQuantity(updatedCart.getQuantity());

        return cartRepository.save(existingCart);
    }

    public String deleteById(long id){
        cartRepository.deleteById(id);

        return "ID: "+id+" deleted";
    }

    public String deleteAll(){
        cartRepository.deleteAll();

        return "All Admin deleted";
    }

}























