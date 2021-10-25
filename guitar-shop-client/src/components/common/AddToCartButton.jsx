import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { GiShoppingBag } from 'react-icons/gi'

function AddToCartButton({productId}) {
    const cartState = useSelector(state => state.cartReducer.data);

    // for alert message using external libary
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1600,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    const addToCartHandler=()=>{
        if(cartState.length >= 1){
            let existingCartId = cartState[cartState.length-1].cartId;
            let cartData = {
                product: {
                    productId: productId
                },
                quantity: 2
            }

            addProductInCart(existingCartId, cartData);
        }
        else{
            alert("Please Login !!");
        }
    }

    const addProductInCart=(existingCartId, cartData)=>{
        axios.patch(`http://localhost:3037/updateCartProductsById/${existingCartId}`,cartData)
            .then((response) => {
                // handle success
                if(response.status.toString() === '200'){
                    console.log("Cart addded", response);
                    Toast.fire({
                        icon: 'success',
                        title: "Product added to Cart."
                    });
    
                }
            })
            .catch(function (error) {
                // handle error
                Toast.fire({
                    icon: 'error',
                    title: "Product already added in cart. To update please click on overview"
                });

            });
    }

    return <p className="btn bg-dark text-white" onClick={addToCartHandler}> <GiShoppingBag/>&emsp;ADD TO CART </p>
}

export default AddToCartButton
