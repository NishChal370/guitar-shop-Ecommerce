import React from 'react'
import { useSelector } from 'react-redux';
import ProductCart from '../common/productCart/ProductCart';

function FeaturedProducts() {
    const productState = useSelector(state => state.productReducer.data);

    return (
        <div className='featured__container container--top-margin'>
            <h3>FEATURED PRODUCTS</h3>
            <p>Check out our best sellers</p>
            <div className='featured__container-product'>
                {(productState !== undefined) && productState.slice(0,4).map((product, index)=>{
                    return <ProductCart key={`featureProd${index}`} product={product}/>
                })
                }
            </div>
        </div>
    )
}

export default FeaturedProducts;