package com.ecommerce.guitarshop.controller;

import java.io.IOException;
import java.util.List;

import com.ecommerce.guitarshop.dto.ProductGetDto;
import com.ecommerce.guitarshop.dto.ProductPostDto;
import com.ecommerce.guitarshop.model.Product;
import com.ecommerce.guitarshop.service.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductService service;

    @GetMapping("/getAllProducts")
    private List<Product> getAllProducts(){
        return service.getAllProducts();
    }

    @GetMapping("/productById/{id}")
    private Product getById(@PathVariable Long id){
        System.out.println("->>>> "+id);
        return service.getById(id);
    }

    @PostMapping("/saveProduct")
    public ResponseEntity<ProductGetDto> setProduct(String product, @RequestParam("file") MultipartFile file) throws IOException {
        ProductPostDto productPostDto = new ObjectMapper().readValue(product, ProductPostDto.class);
        //        return new ResponseEntity<Product>(
//                service.save(product), HttpStatus.CREATED);

//        return service.save(productPostDto, file);
        return new ResponseEntity<ProductGetDto>(
                service.save(productPostDto, file), HttpStatus.CREATED);
    }

    //->> this is correct
//    @PostMapping("/saveProduct")
//    public ResponseEntity<Product> setProduct(@RequestBody Product product){
//        return new ResponseEntity<Product>(
//                service.save(product), HttpStatus.CREATED);
//    }
    //<<----
    @PostMapping("/saveProducts")
    public ResponseEntity<List<Product>> setProducts(@RequestBody List<Product> products){
        System.out.println("frist");
        System.out.println(products);
        return new ResponseEntity<List<Product>>(
                service.saveAll(products), HttpStatus.CREATED);
    }

    @PostMapping("/updateProductById/{productId}")
    public String updateProducts(@PathVariable Long productId,@RequestParam("product") String product, @RequestParam("file") MultipartFile file) throws IOException {
        ProductPostDto productPostDto = new ObjectMapper().readValue(product, ProductPostDto.class);

        return service.updateProduct(productId, productPostDto, file);
    }

    @PatchMapping("/updateProductQuantityById/{id}&{quantity}")
    public String updateProductQuantityById(@PathVariable long id, @PathVariable int quantity){
        return service.updateById(id, quantity);
    }

    @DeleteMapping("/deleteProductById/{id}")
    public String deleteProduct(@PathVariable Long id){
        return service.deleteById(id);
    }

    @DeleteMapping("/deleteProduct")
    public String deleteAll(){
        return service.deleteAll();
    }
}
