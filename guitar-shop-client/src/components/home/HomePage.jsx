import React from 'react'
import { useSelector } from 'react-redux';

import './Home.css'
import Carousel from './Carousel'
import Testimonial from './Testimonial';
import SampleProduct from './SampleProduct';
import FeaturedProducts from './FeaturedProducts';


function HomePage() {
    const categoryProductState = useSelector(state => state.categoryReducer.data);

    return (
        <div>
            <Carousel/>
            <div className="row first-row">
                <div className="col-md-3 col-12 row--padding">
                    <article className="item keyboard" style={{background: `url(https://www.musicplanet.co.nz/media/homepage/piano.jpg)`}}>
                        <h3 className="text1">Keyboards</h3>
                        <div className="button-with-bg">Shop Now</div>
                    </article>
                </div>
                <div className="col-md-3 col-12 row--padding">
                    <article className="item drums" style={{background: `url(https://www.musicplanet.co.nz/media/homepage/drums_1.jpg)`}}>
                        <h3 className="text1">Drums</h3>
                        <div className="button-with-bg">Shop Now</div>
                    </article>
                </div>
                <div className="col-md-3 col-12 row--padding">
                    <article className="item guitar" style={{background: `url(https://www.musicplanet.co.nz/media/homepage/guitar3.jpg)`}}>
                        <h3 className="text1">Guitars</h3>
                        <div className="button-with-bg">Shop Now</div>
                    </article>
                </div>
                <div className="col-md-3 col-12 row--padding">
                    <article className="item artist" style={{background: `url(https://www.musicplanet.co.nz/media/homepage/Studio.jpg)`}}>
                        <h3 className="text1">Studio</h3>
                        <div className="button-with-bg ">Shop Now</div>
                    </article>
                </div>
            </div>

            {(categoryProductState !== undefined) 
                ?<> <SampleProduct/>
                    <FeaturedProducts/>
                    <Testimonial/>
                </>
                : "Loading..."
            }
            
        </div>
    )
}


export default HomePage
