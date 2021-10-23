package com.ecommerce.guitarshop.mapper;

import com.ecommerce.guitarshop.dto.LoginDto;
import com.ecommerce.guitarshop.model.Admin;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LoginMapper {
    LoginMapper INSTANCE = Mappers.getMapper(LoginMapper.class);

    List<LoginDto> modelsToDto(List<Admin> admins);
}
