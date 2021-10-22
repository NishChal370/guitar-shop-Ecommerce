import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ProductCart from '../common/productCart/ProductCart';

function FeaturedProducts() {
    const [slide, setSlide] = useState({start:0, end:4});
    const productState = useSelector(state => state.productReducer.data);

    const slideHandler=(e)=>{
        let buttonId = e.target.id;

            if(buttonId === "end" && slide.start === 0){
                console.log("11");
                slide.start +=1;
                slide.end +=1;
            }else if(slide.start >0){
                console.log("12");
                slide.start -=1;
                slide.end -=1;
            }
            setSlide({...slide});
        
    }

    return (
        <div className='featured__container container--top-margin container-fluid'>
            <h3>FEATURED PRODUCTS</h3>
            <p>Check out our best sellers</p>
            <div className='featured__container-product'>
                {(productState !== undefined) && productState.slice(slide.start, slide.end).map((product, index)=>{
                    return <ProductCart key={`featureProd${index}`} product={product}/>
                })
                }
            </div>
            <span className="sample-scroll__button sample-scroll__button--featured">
                <input id="start" type="radio" name="feature_slide"  onClick={slideHandler}/>
                <input id="end" type="radio" name="feature_slide" onClick={slideHandler}/>
            </span>
        </div>
    )
}

export default FeaturedProducts;