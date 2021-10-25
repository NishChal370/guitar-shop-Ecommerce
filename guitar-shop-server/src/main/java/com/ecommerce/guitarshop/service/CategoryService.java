package com.ecommerce.guitarshop.service;
import com.ecommerce.guitarshop.model.Category;
import com.ecommerce.guitarshop.model.Product;
import com.ecommerce.guitarshop.dao.CategoryRepository;

import java.util.List;
import javax.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> saveAll(List<Category> categories){
        return categoryRepository.saveAll(categories);
    }

    public Category save(Category category){
        return categoryRepository.save(category);
    }

    public Category getById(long id){
        return categoryRepository.findById(id).orElseThrow(EntityNotFoundException::new) ;
    }

    public List<Category> getAll(){
         List<Category> cateogary = categoryRepository.findAll();
        for(Category c:cateogary){
            for (Product p: c.getProducts()){
                p.setImageOne(ServletUriComponentsBuilder.fromCurrentContextPath().path("/productImage/").path(p.getImageOne()).toUriString());
            }
        }

        return cateogary;
    }

    public Category updateCategory(Long id, Category updatedCategory){
        Category existingCategory = categoryRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        existingCategory.setCategoryName(updatedCategory.getCategoryName());

        return categoryRepository.save(existingCategory);
    }

    public String deleteById(long id){
        categoryRepository.deleteById(id);

        return "ID: "+id+" deleted";
    }

    public String deleteAll(){
        categoryRepository.deleteAll();

        return "All Admin deleted";
    }
}
