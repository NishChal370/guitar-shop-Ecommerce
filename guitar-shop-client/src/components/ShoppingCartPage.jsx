import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ImCross, ImMinus, ImPlus } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { setCart } from '../redux/Action';
import { GrFormSubtract } from "react-icons/gr";

function ShoppingCartPage() {
    const dispatch = useDispatch();
    const [isCartProductDeleted, setIsCartProductDeleted] = useState(false);
    const existingCartsData = useSelector(state => state.cartReducer.data);
    const [cartsState, setCartsState] = useState(existingCartsData);
    let [totalPrice, setTotalPrice] = useState(0);
    let presentingCartId = (existingCartsData !== undefined) && existingCartsData[existingCartsData.length-1].cartId;
    let cartProductList = (existingCartsData !== undefined) && existingCartsData[existingCartsData.length-1].cartProducts;
    
    let [qunatity, setQunatity] = useState(1);
    const calculateOrderTotal=()=>{
        cartProductList.map((value, index)=>{
            totalPrice += value.product.price;
        });
        setTotalPrice(totalPrice);
        console.log("TOTAL PRICE -> ", totalPrice);
    }

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

    const fetchCartData=()=>{
        // Make a request for a user with a given ID
        axios.get(`http://localhost:3037/cart`)
            .then((response) => {
                if(response.status.toString() === '200'){
                  dispatch(setCart(response.data))
                  console.log("CHEK ME");
                  console.log(response.data);
                  console.log("CHEK ME");
                }
            })
            .catch(function (error) {
                // handle error
                console.log("Error -> ",error);
            });
    }

    const deleteCartProduct=(productId, deletingProductPrice)=>{
        alert("CartID"+ presentingCartId +"ProductID"+ productId);
        axios.delete(`http://localhost:3037/deleteCartById/cartId=${presentingCartId}/productId=${productId}`)
            .then((response) => {
                console.log('DELETED '+ response);
                totalPrice -= deletingProductPrice;
                setTotalPrice(totalPrice);
                setIsCartProductDeleted(true);
                Toast.fire({
                    icon: 'success',
                    title: 'Product removed from cart'
                });
            })
            .catch(function (error) {
                // handle error
                console.log("Error -> ",error);
            });
    }


    useEffect(() => {
        fetchCartData();
        setIsCartProductDeleted(false);
    }, [isCartProductDeleted]);

    useEffect(()=>{
        setCartsState(existingCartsData);
        (existingCartsData !== undefined) && calculateOrderTotal();
    },[existingCartsData]);

    return (
        <div className="shopping-cart__container">
            <div className="cart-table__container">
                <h4>Shopping Cart</h4>
                <table class="table shopping__table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Company</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        (cartProductList) && cartProductList.map((value, index)=>{
                            return(
                                <>
                                    <tr key={`cartprodRow${index}`}>
                                        <td>{value.product.name}</td>
                                        <td>{value.product.productCompany}</td>
                                        <td>{value.product.price}</td>
                                        <td>{value.quantity}</td>
                                    </tr>
                                    <tr key={`cartprodRow2${index}`}>
                                        {/* <td colspan="4" class="table-active" style={{textAlign:"right"}} onClick={()=>deleteCartProduct(value.product.productId, value.product.price)}><GrFormSubtract/></td>
                                        <td colspan="4" class="table-active" style={{textAlign:"right"}} onClick={()=>deleteCartProduct(value.product.productId, value.product.price)}><RiAddFill/></td> */}
                                        <td colspan="4" class="table-active table--button">
                                            <span><ImPlus/></span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span><ImMinus/></span>
                                            <span>&nbsp;&nbsp;</span>
                                            <span onClick={()=>deleteCartProduct(value.product.productId, value.product.price)}><ImCross/></span>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            <div className="summary__container">
                <h3>Summary</h3>
                <hr/>
                <section className="shipping__container">
                    <p>ESTIMATE SHIPPING AND TAX</p>
                    <div>
                        <label htmlFor="country">Country</label>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Nepal
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button class="dropdown-item" type="button">Nepal</button></li>
                            </ul>
                        </div>
                        <span className="input--flex" style={{display: "flex"}}>
                            <p>State/Province</p>
                            <input type="text" />
                        </span>
                        <span className="input--flex">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" />
                        </span>
                        
                    </div>
                </section>
                <hr/>
                <section>
                    <span><p>Subtotal</p><p>${totalPrice}</p></span>
                    <span><p>Shipping (Fixed Rate)</p><p>$30</p></span>
                </section>
                <hr/>
                <section>
                    <span>
                        <h3>Order Total</h3>
                        <h3>${totalPrice+30}</h3>
                    </span>
                </section>
                <hr/>
                <section>
                    <button type="button " class="btn btn-dark checkout__button">PROCEED TO CHECKOUT</button>
                </section>
            </div>
        </div>
    )
}

export default ShoppingCartPage
