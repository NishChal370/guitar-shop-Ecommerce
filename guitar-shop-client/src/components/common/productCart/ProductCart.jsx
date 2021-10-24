import React, { useEffect, useState } from 'react'

import './ProductCart.css'
import { useHistory } from 'react-router';
import { GiShoppingBag, GiSelfLove } from 'react-icons/gi'
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { MdOutlineShoppingBag, MdOutlineStarBorderPurple500 } from "react-icons/md";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

function ProductCart({product, calledFrom, categoryId}) {
    const history = useHistory();
    const cartState = useSelector(state => state.cartReducer.data);
    // const [cartInfo, setCartInfo]= useState(cartState);
    let [productQunatityInCart, setProductQunatityInCart] = useState(0);
    // let [userHaveCart, setUserHaveCart]= useState();
    let{name, price, imageOne, productQuantity, productId} = product;

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

    const editProducthandler=()=>{
        history.push({
            pathname:  "/admin/products/a",
            editingProductData: {product: product, categoryId: categoryId}
         });
    }

    const deleteProduct=()=>{
        // Make a request for a user with a given ID
        axios.delete(`http://localhost:3037/deleteProductById/${productId}`)
            .then((response) => {
                if(response.status.toString() === '200'){
                    Toast.fire({
                        icon: 'success',
                        title: 'Product deleted Sucessfully !!!'
                    });
                }
            })
            .catch(function (error) {
                // handle error
                console.log("Error -> ",error);
                Toast.fire({
                    icon: 'error',
                    title: 'Product can not be deleted !!!'
                });
            });
    }

    const addToCartHandler=()=>{
        alert("Cart added--->>>");
        productQunatityInCart +=1;
        setProductQunatityInCart(productQunatityInCart);
        // let existingCartId = cartInfo[cartInfo.length-1].cartId;
        // console.log(cartInfo);
        // console.log("CartID ",cartInfo[cartInfo.length-1].cartId);
        let existingCartId = cartState[cartState.length-1].cartId;
        console.log(cartState);
        console.log("CartID ",cartState[cartState.length-1].cartId);
        console.log("productId", productId);
        let cartData = {
            product: {
                productId: productId
            },
            quantity: productQunatityInCart
        }

        addProductInCart(existingCartId, cartData);
        console.log("<<<----Cart added");
        // setProductQunatityInCart(productQunatityInCart);
        alert(productQunatityInCart);
        // updateCartData();
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
                console.log("Error -> from cart ",error);
                alert("Cart existto update please click on overview");
                Toast.fire({
                    icon: 'error',
                    title: "Product already added in cart. To update please click on overview"
                });

            });
    }
    
    useEffect(()=>{
        console.log("Cartinfo from product cart>=");
        console.log("from user have effect");
        // console.log("-> ", userHaveCart);
        console.log(cartState);
        console.log("Cartinfo from product cart<=");
    },[]);

    return (
        <div className="card">
            <figure className="card__figure">
                <img src={imageOne} className="card-img-top" alt="productImage"/>
                <figcaption className="card__caption" >
                    {(calledFrom !== "admin")
                      ? <>
                            <span className="cart__icons">
                                <p><GiSelfLove/></p>
                                <p><MdOutlineShoppingBag/></p>
                            </span>
                            <h5 className='card__overview'  onClick={()=>history.push({pathname: '/product/overview', state:{categoryId: categoryId, product:product}})}>Over view</h5>
                        </>
                      :<>
                        <span className="cart__icons icon--color">
                            <p onClick={editProducthandler} ><AiFillEdit/></p>
                            <p onClick={deleteProduct}><RiDeleteBin4Fill/></p>
                        </span> 
                        {/* <h5 className='card__overview overview--height'>Over view</h5> */}
                      </>
                    } 
                </figcaption>
            </figure>
            
            <div className="card-body">
                <p className="card-title">{name.slice(0, 28)+"...."}</p>
                {
                    (calledFrom !== "admin") && (
                        <>
                        <span><MdOutlineStarBorderPurple500/></span>
                        <span><MdOutlineStarBorderPurple500/></span>
                        <span><MdOutlineStarBorderPurple500/></span>
                        <span><MdOutlineStarBorderPurple500/></span>
                        <span><MdOutlineStarBorderPurple500/></span>
                        </>
                    )
                }
                <h5 className="card-price">${price}</h5>
                {(calledFrom !== "admin")
                    ? <p className="btn bg-dark text-white" onClick={addToCartHandler}> <GiShoppingBag/>&emsp;ADD TO CART </p>
                    : <div className="product-quantity__continer">
                        <p>Avaible quantity: {productQuantity}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductCart;


 // const fetchCartData=()=>{
    //     // Make a request for a user with a given ID
    //     axios.get(`http://localhost:3037/cart`)
    //         .then((response) => {
    //             if(response.status.toString() === '200'){
    //                 console.log("-----------------------");
    //                 console.log(response.data);
    //                 console.log(response.data.length);
    //                 console.log(response.data.order);
    //                 if(response.data.length === 0){
    //                     console.log("LENGTH ZERO");
    //                     setUserHaveCart(false);
    //                 }
    //                 else if(response.data[0].order === null){
    //                     console.log("NULL CART");
    //                     setUserHaveCart(true);
    //                 }
    //                 else if(response.data.order !== null){
    //                     console.log("NOT NULLL");
    //                     setUserHaveCart(false);
    //                 }
    //             }
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log("Error -> ",error);
    //         });
    // }


    // useEffect(()=>{
    //     fetchCartData();
    // },[])

    // const updateCartData=()=>{
    //     // Make a request for a user with a given ID
    //     axios.get(`http://localhost:3037/cart`)
    //         .then((response) => {
    //             if(response.status.toString() === '200'){
    //             }
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log("Error -> ",error);
    //         });
    // }
    
    