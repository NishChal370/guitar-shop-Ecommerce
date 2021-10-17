import React from 'react'
import { useSelector } from 'react-redux';
import ProductCart from '../common/productCart/ProductCart';

function SampleProduct() {
    const categoryProductState = useSelector(state => state.categoryReducer.data);

    const productOne = (categoryProductState !== undefined)?categoryProductState.at(0).products: "";
    const productTwo = (categoryProductState !== undefined)?categoryProductState.at(1).products: "";
    return (
        <>
            <div className='row'>
                <article className="products__container col-lg-6 col-md-6">
                    <h3>NEW IN STORE</h3>
                    <p>Yes, this is our range, check it out!</p>
                    <div className="product__container--card">
                        {productOne.slice(0,2).map((product, index)=>{

                            return  (index<2) && <ProductCart key={`sampleProd${index}`} product={product}/>
                        })}
                    </div>
                </article>
                <aside className="col-lg-6 col-md-12 md-order-12 row--padding">
                    <div id="half-image-1">
                        <img style={{width: "100%"}} src="https://www.musicplanet.co.nz/media/homepage/Korg_Block_1.jpg" alt=""/>
                    </div>
                </aside>
            </div>

            <div className='row container--top-margin'>
                <aside className="col-lg-6 col-md-12 md-order-12 row--padding">
                    <div id="half-image-1">
                        <img style={{width: "100%"}} src="https://www.musicplanet.co.nz/media/homepage/VOX_Block.jpg" alt=""/>
                    </div>
                </aside>
                <article className="products__container col-lg-6 col-md-6">
                    <h3>{categoryProductState.at(1).categoryName.toUpperCase()} RANGE</h3>
                    <p>For all skill levels and budgets.</p>
                    <div className="product__container--card">
                        {productTwo.map((product, index)=>{
                            return  (index<2) && <ProductCart key={`sampleProd${index}`} product={product}/>
                        })}
                    </div>
                </article>
            </div>
        </>
    )
}

export default SampleProduct
