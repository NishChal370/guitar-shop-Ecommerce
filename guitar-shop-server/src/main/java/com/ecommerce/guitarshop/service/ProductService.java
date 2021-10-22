package com.ecommerce.guitarshop.service;

import com.ecommerce.guitarshop.dao.ProductRepository;
import com.ecommerce.guitarshop.model.Product;

import java.util.Base64;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public Product save(Product product){

//        System.out.println(product);
//        String fileName = StringUtils.cleanPath(product.getImageOne());
//        if(fileName.contains("...")){
//            System.out.println("not a valid file");
//        }
//        Product newProduct = new Product();
//        newProduct.setName(product.getName());
//        newProduct.setDetail(product.getDetail());
//        newProduct.setFeature(product.getFeature());
//        newProduct.setType(product.getType());
//        newProduct.setPrice(product.getPrice());
//        newProduct.setImageOne(Base64.getEncoder().encodeToString(fileName.getBytes()));
////        newProduct.setImageOne(pr);
//        newProduct.setImageTwo(product.getImageTwo());
//        newProduct.setImageThree(product.getImageThree());
//        newProduct.setProductCompany(product.getProductCompany());
//
        return productRepository.save(product);
    }

    public List<Product> saveAll(List<Product> products){
        return productRepository.saveAll(products);
    }

    public Product getById(long id){
        return productRepository.findById(id).orElseThrow(EntityNotFoundException::new) ;
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Product updateProduct(Long id, Product updatedProduct){
        Product existingProduct = productRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        existingProduct.setName(updatedProduct.getName());
        existingProduct.setDetail(updatedProduct.getDetail());
        existingProduct.setFeature(updatedProduct.getFeature());
        existingProduct.setType(updatedProduct.getType());
        existingProduct.setPrice(updatedProduct.getPrice());
        existingProduct.setImageOne(updatedProduct.getImageOne());
        existingProduct.setImageTwo(updatedProduct.getImageTwo());
        existingProduct.setImageThree(updatedProduct.getImageThree());
        existingProduct.setProductCompany(updatedProduct.getProductCompany());

        return productRepository.save(existingProduct);
    }

    public String updateById(long id, int productQuantity){
        productRepository.updateProductById(id, productQuantity);

        return "Product id:  "+id+" updated";
    }

    public String deleteById(long id){
        productRepository.deleteById(id);

        return "ID: "+id+" deleted";
    }

    public String deleteAll(){
        productRepository.deleteAll();

        return "All Admin deleted";
    }
}
