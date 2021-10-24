package com.ecommerce.guitarshop.util;

import java.util.regex.Pattern;

public class BuyerValidator {
    public static final Pattern VALID_EMAIL_ADDRESS_REGEX =
            Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);

    public static boolean validateEmail(String email)
    {
        java.util.regex.Matcher matcher = VALID_EMAIL_ADDRESS_REGEX .matcher(email);
        return matcher.find();
    }
    //regex return false when name contains special chars or numbers
    public static boolean validateFirstname(String firstName) {
        String expression = "^[a-zA-Z\\s]+";
        return firstName.matches(expression);
    }

    ////regex return false when name contains special chars or numbers
    public static boolean validateAddress(String address) {
        String expression = "^[a-zA-Z\\s]+";
        return address.matches(expression);
    }

    //regex for password validation
    public static boolean validatePassword(String password) {
        //password will contain numbers and chars upper and lower case and special char
        String expression = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$";
        return password.matches(expression);
    }

    //regex for mobile validation
    public static boolean validateMobile(String password) {
        //Validate that the input phone number does not have anything except digits 0-9 and the number length must be 10
        String expression = "^[0-9]{10}$";
        return password.matches(expression);
    }

}