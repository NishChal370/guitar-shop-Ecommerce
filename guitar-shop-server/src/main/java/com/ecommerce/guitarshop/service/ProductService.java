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
import java.util.List;
import java.util.UUID;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
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
    }

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

    public String updateProduct(Long productId, ProductPostDto updatedProductPostDto, MultipartFile updatedFile) throws IOException{
        Product existingProduct = productRepository.findById(productId).orElseThrow(EntityNotFoundException::new);

        if( existingProduct != null ){
            UUID uuid =UUID.randomUUID();
            File saveFile = new ClassPathResource("static/productImage").getFile();
            Path path = Paths.get(saveFile.getAbsolutePath()+File.separator + uuid + updatedFile.getOriginalFilename());
            Files.copy(updatedFile.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);

            Product newUpdatedProduct = productMapper.dtoToModel(updatedProductPostDto);
            newUpdatedProduct.setImageOne(uuid+updatedFile.getOriginalFilename());

            existingProduct.setName(newUpdatedProduct.getName());
            existingProduct.setDetail(newUpdatedProduct.getDetail());
            existingProduct.setFeature(newUpdatedProduct.getFeature());
            existingProduct.setType(newUpdatedProduct.getType());
            existingProduct.setPrice(newUpdatedProduct.getPrice());
            existingProduct.setImageOne(newUpdatedProduct.getImageOne());
            existingProduct.setImageTwo(newUpdatedProduct.getImageTwo());
            existingProduct.setImageThree(newUpdatedProduct.getImageThree());
            existingProduct.setProductCompany(newUpdatedProduct.getProductCompany());
            productRepository.save(existingProduct);

            return "Updated ID: "+ productId;
        }
        else{
            return "Not Found";
        }
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
