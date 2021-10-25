package com.ecommerce.guitarshop.model;

import lombok.*;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "category", schema = "guitar_shop")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryId;

    @NotEmpty
    private String categoryName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category",  fetch = FetchType.LAZY)
    @JsonManagedReference(value =  "product-category")
    private List<Product> products;
}
