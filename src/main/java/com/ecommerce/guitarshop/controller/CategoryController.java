package com.ecommerce.guitarshop.controller;

import com.ecommerce.guitarshop.model.Category;
import com.ecommerce.guitarshop.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {
    @Autowired
    private CategoryService service;

    @GetMapping("/category")
    private List<Category> getAll(){
        return service.getAll();
    }
    @GetMapping("/categoryById/{id}")
    private Category getById(@PathVariable Long id){
        return service.getById(id);
    }

    @PostMapping("/saveCategories")
    public ResponseEntity<List<Category>> setCategories(@RequestBody List<Category> categories){
        return new ResponseEntity<List<Category>>(
                service.saveAll(categories), HttpStatus.CREATED);
    }

    @PostMapping("/saveCategory")
    public ResponseEntity<Category> setCategory(@RequestBody Category category){
        return new ResponseEntity<Category>(
                service.save(category), HttpStatus.CREATED);
    }

    @PutMapping("/updateCategory/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody Category category){
        return new ResponseEntity<Category>(
                service.updateCategory(id, category), HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteCategoryById/{id}")
    public String deleteCategory(@PathVariable Long id){
        return service.deleteById(id);
    }

    @DeleteMapping("/deleteCategory")
    public String deleteAll(){
        return service.deleteAll();
    }
}
