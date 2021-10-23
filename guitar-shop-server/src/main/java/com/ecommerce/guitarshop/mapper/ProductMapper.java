package com.ecommerce.guitarshop.mapper;

import com.ecommerce.guitarshop.dto.ProductGetDto;
import com.ecommerce.guitarshop.dto.ProductPostDto;
import com.ecommerce.guitarshop.model.Product;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductMapper PRODUCT_MAPPER = Mappers.getMapper(ProductMapper.class);

    ProductPostDto modelToPostDto(Product product);

    ProductGetDto modelToGetDto(Product product);

    @InheritInverseConfiguration
    Product dtoToModel(ProductPostDto productPostDto);
}
