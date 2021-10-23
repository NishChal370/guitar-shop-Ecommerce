import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ProductCart from '../common/productCart/ProductCart';

function SampleProduct() {
    const categoryProductState = useSelector(state => state.categoryReducer.data);
    
    const [slide1, setSlide1]= useState({start:0, end:2});
    const [slide2, setSlide2]= useState({start:0, end:2});

    const productOne = (categoryProductState !== undefined)?categoryProductState.at(0).products: "";
    const productTwo = (categoryProductState !== undefined)?categoryProductState.at(1).products: "";

    const slideHandler=(e)=>{
        let buttonName = e.target.name;
        let buttonId = e.target.id;
        if(buttonName === "slide1"){
            if(buttonId === "end" && slide1.start === 0){
                slide1.start +=1;
                slide1.end +=1;
            }else if(slide1.start >0){
                slide1.start -=1;
                slide1.end -=1;
            }
            setSlide1({...slide1});
        }

        if(buttonName === "slide2" ){
            if(buttonId === "end" && slide2.start === 0){
                slide2.start +=1;
                slide2.end +=1;
            }else if(slide2.start >0){
                slide2.start -=1;
                slide2.end -=1;
            }
            setSlide2({...slide2});
        }

    }
    
    return (
        <>
            <div className='row'>
                <article className="products__container container--top-margin col-lg-6 col-md-6">
                    <section>
                        <span>
                            <h3>NEW IN STORE</h3>
                            <p>Yes, this is our range, check it out!</p>
                        </span>
                        <span className="sample-scroll__button">
                            <input id="start" type="radio" name="slide1" onClick={slideHandler}/>
                            <input id="end" type="radio" name="slide1" onClick={slideHandler}/>
                        </span>
                    </section>
                    <div className="product__container--card">
                        {productOne.slice(slide1.start,slide1.end).map((product, index)=>{
                            return  <ProductCart key={`sampleProd${index}`} product={product}/>
                        })}
                    </div>
                </article>
                
                <aside className="col-lg-6 col-md-12 md-order-12 row--padding">
                    <div className="ads-img">
                        <img  src="https://www.musicplanet.co.nz/media/homepage/Korg_Block_1.jpg" alt="ads"/>
                    </div>
                </aside>
                
            </div>

            <div className='row container--top-margin'>
                <aside className="col-lg-6 col-md-12 md-order-12 row--padding">
                    <div className="ads-img">
                        <img src="https://www.musicplanet.co.nz/media/homepage/VOX_Block.jpg" alt="ads"/>
                    </div>
                </aside>
                <article className="products__container col-lg-6 col-md-6">
                    <section>
                        <span>
                            <h3>{categoryProductState.at(1).categoryName.toUpperCase()} RANGE</h3>
                            <p>For all skill levels and budgets.</p>
                        </span>
                        <span className="sample-scroll__button">
                            <input id="start" type="radio" name="slide2" onClick={slideHandler}/>
                            <input id="end" type="radio" name="slide2" onClick={slideHandler}/>
                        </span>
                    </section>
                    <div className="product__container--card">
                        {productTwo.slice(slide2.start, slide2.end).map((product, index)=>{
                            return  (index<2) && <ProductCart key={`sampleProd${index}`} product={product}/>
                        })}
                    </div>
                </article>
            </div>
        </>
    )
}

export default SampleProduct
