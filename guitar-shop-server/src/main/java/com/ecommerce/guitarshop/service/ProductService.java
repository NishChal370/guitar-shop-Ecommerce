package com.ecommerce.guitarshop.service;

import com.ecommerce.guitarshop.dao.ProductRepository;
import com.ecommerce.guitarshop.dto.ProductGetDto;
import com.ecommerce.guitarshop.dto.ProductPostDto;
import com.ecommerce.guitarshop.mapper.ProductMapper;
import com.ecommerce.guitarshop.model.Product;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Base64;
import java.util.List;
import java.util.UUID;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.persistence.EntityNotFoundException;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductMapper productMapper;

    public ProductGetDto save(ProductPostDto productPostDto, MultipartFile file) throws IOException{

        UUID uuid =UUID.randomUUID();
        File saveFile = new ClassPathResource("static/productImage").getFile();
        Path path = Paths.get(saveFile.getAbsolutePath()+File.separator + uuid + file.getOriginalFilename());
        Files.copy(file.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);

        Product newProduct = productMapper.dtoToModel(productPostDto);
        newProduct.setImageOne(uuid+file.getOriginalFilename());

        Product product = productRepository.save(newProduct);

        ProductGetDto productGetDto = productMapper.modelToGetDto(product);

        productGetDto.setImageOne(ServletUriComponentsBuilder.fromCurrentContextPath().path("/productImage/").path(productGetDto.getImageOne()).toUriString());

        return  productGetDto;
//        UserGetDto userGetDto = userMapper.modelToGetDto(user);
//        userGetDto.setImagePath(ServletUriComponentsBuilder.fromCurrentContextPath().path("/userimage/").path(userGetDto.getImagePath()).toUriString());
//        return null;
    }


    //->> this is correct
//    public Product save(Product product){
//
////        System.out.println(product);
////        String fileName = StringUtils.cleanPath(product.getImageOne());
////        if(fileName.contains("...")){
////            System.out.println("not a valid file");
////        }
////        Product newProduct = new Product();
////        newProduct.setName(product.getName());
////        newProduct.setDetail(product.getDetail());
////        newProduct.setFeature(product.getFeature());
////        newProduct.setType(product.getType());
////        newProduct.setPrice(product.getPrice());
////        newProduct.setImageOne(Base64.getEncoder().encodeToString(fileName.getBytes()));
//////        newProduct.setImageOne(pr);
////        newProduct.setImageTwo(product.getImageTwo());
////        newProduct.setImageThree(product.getImageThree());
////        newProduct.setProductCompany(product.getProductCompany());
////
//        return productRepository.save(product);
//    }

    public List<Product> saveAll(List<Product> products){
        return productRepository.saveAll(products);
    }

    public Product getById(long id){
        return productRepository.findById(id).orElseThrow(EntityNotFoundException::new) ;
    }

    public List<Product> getAllProducts(){
        List<Product> products = productRepository.findAll();
        for(Product p:products){
            p.setImageOne(ServletUriComponentsBuilder.fromCurrentContextPath().path("/productImage/").path(p.getImageOne()).toUriString());
        }
        return products;
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
