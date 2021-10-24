import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../redux/Action';

function ShoppingCartPage() {
    const dispatch = useDispatch();
    const existingCartsData = useSelector(state => state.cartReducer.data);
    const [cartsState, setCartsState] = useState(existingCartsData);
    // let presentId
    let cartProductList = (existingCartsData !== undefined) &&existingCartsData[existingCartsData.length-1].cartProducts;
    
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

    const deleteCartProduct=()=>{
        alert(existingCartsData.cartId);
    }
    useEffect(() => {
        fetchCartData();
    }, []);

    useEffect(()=>{
        setCartsState(...existingCartsData);
    },[existingCartsData]);
    
    return (
        <div className="shopping-cart__container">
            {console.log("From return->")}
            {console.log(existingCartsData)}
            {console.log("<-From return")}
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
                            cartProductList.map((value, index)=>{
                                return(
                                    <>
                                        <tr>
                                            <td>{value.product.name}</td>
                                            <td>{value.product.productCompany}</td>
                                            <td>{value.product.price}</td>
                                            <td>{value.product.productQuantity}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4" class="table-active" style={{textAlign:"right"}} onClick={deleteCartProduct}><ImCross/></td>
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
                    <span><p>Subtotal</p><p>0908</p></span>
                    <span><p>Shipping (Fixed Rate)</p><p>$30</p></span>
                </section>
                <hr/>
                <section>
                    <span>
                        <h3>Order Total</h3>
                        <h3>$09778</h3>
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
