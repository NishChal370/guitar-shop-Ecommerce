import React, { useEffect } from 'react'

import './ProductCart.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';
import { GiSelfLove } from 'react-icons/gi'
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { MdOutlineShoppingBag, MdOutlineStarBorderPurple500 } from "react-icons/md";

import AddToCartButton from '../AddToCartButton';

function ProductCart({product, calledFrom, categoryId}) {
    const history = useHistory();
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
 
    useEffect(()=>{
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
                    ? <AddToCartButton productId={productId}/>
                    : <div className="product-quantity__continer">
                        <p>Avaible quantity: {productQuantity}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductCart;