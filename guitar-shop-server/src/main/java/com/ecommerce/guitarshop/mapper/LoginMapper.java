package com.ecommerce.guitarshop.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import com.ecommerce.guitarshop.dto.LoginDto;
import com.ecommerce.guitarshop.model.Admin;

@Mapper(componentModel = "spring")
public interface LoginMapper {
    LoginMapper INSTANCE = Mappers.getMapper(LoginMapper.class);

    List<LoginDto> modelsToDto(List<Admin> admins);
}
