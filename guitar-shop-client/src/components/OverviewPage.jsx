import React from 'react'
import { FaTwitterSquare } from "react-icons/fa";
import { ImFacebook2, ImMail } from "react-icons/im";
import { useLocation } from 'react-router';
import { GiProgression, GiSelfLove } from 'react-icons/gi';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';

import '../index.css'
import AddToCartButton from './common/AddToCartButton';

function OverviewPage() {
    const {state} = useLocation();

    const productInfo = state.product;
    return (
        <div className="overview__container">
            <figure>
                <img src={productInfo.imageOne}/>
            </figure>
            <section>
                <h3 className="product__title">{productInfo.name}</h3>
                <span style={{display:"flex", gap:'1rem', fontFamily:"italic"}}>
                    <p>{productInfo.productCompany}</p>
                    <p>{productInfo.type}</p>
                </span>
                <div className="product__rating">
                    <span><MdOutlineStarBorderPurple500/></span>
                    <span><MdOutlineStarBorderPurple500/></span>
                    <span><MdOutlineStarBorderPurple500/></span>
                    <span><MdOutlineStarBorderPurple500/></span>
                    <span><MdOutlineStarBorderPurple500/></span>
                </div>
                <hr/>
                <p className="product__price">${productInfo.price}</p>
                <hr/>
                <div className="addCart__container"> 
                    <AddToCartButton productId={productInfo.productId}/>
                </div>
                <hr/>
                <div className="love-progress__container">
                    <span><GiSelfLove/></span>
                    <span><GiProgression/></span>
                </div>
                <hr/>
                <div className="media__icon">
                    <span><ImFacebook2/></span>
                    <span><FaTwitterSquare/></span>
                    <span><ImMail/></span>
                </div>
                <article>
                    <p className="detail__title">Detail</p>
                    <hr/>
                    <p>{productInfo.detail}</p>
                    <p className="detail__title">Feature</p>
                    <hr/>
                    {productInfo.feature.split('.').map((v)=>{
                        return <p>{v}.</p>
                    })}
                </article>
                
            </section>
        </div>
    )
}

export default OverviewPage
