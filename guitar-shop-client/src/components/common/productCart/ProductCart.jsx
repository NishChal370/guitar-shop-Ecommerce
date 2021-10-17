import React from 'react'
import { GiShoppingBag } from 'react-icons/gi'

function ProductCart({product}) {
    let{name, price, imageOne} = product;

    return (
        <figure className="card product__card-figure">
            <img src={imageOne} className="card-img-top" alt="..."/>
            <p>Love</p>
            <figcaption className="card-body">
                <p className="card-text">{name}</p>
                <h5 className="card-price">${price}</h5>
                <a href="#" className="btn bg-dark text-white"><GiShoppingBag/>ADD TO CART</a>
            </figcaption>
        </figure>
    )
}

export default ProductCart;
