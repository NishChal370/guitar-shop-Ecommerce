import React from 'react'

import './ProductCart.css'
import { useHistory } from 'react-router';
import { GiShoppingBag, GiSelfLove } from 'react-icons/gi'
import { MdOutlineShoppingBag, MdOutlineStarBorderPurple500 } from "react-icons/md";

function ProductCart({product, calledFrom, categoryId}) {
    const history = useHistory();
    let{name, price, imageOne, productQuantity} = product;
    
    const editProducthandler=()=>{
        history.push({
            pathname:  "/admin/products/a",
            state: {product: product, categoryId: categoryId}
         });
    }

    console.log(categoryId);
    
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
                        <p className="card__edit--button" onClick={editProducthandler} >Edit</p>
                        <h5 className='card__overview overview--height'>Over view</h5>
                      </>
                     
                    } 
                </figcaption>
            </figure>
            
            <div className="card-body">
                <p className="card-title">{name}</p>
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
                    ? <p className="btn bg-dark text-white"><GiShoppingBag/>&emsp;ADD TO CART</p>
                    : <div className="product-quantity__continer">
                        <p>Avaible quantity: {productQuantity}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductCart;
