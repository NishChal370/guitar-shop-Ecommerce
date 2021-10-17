import React from 'react'

function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {[0,1,2,3,4,5].map((value, index)=>
                    <button key={`slider${index}`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={value} className={(value === 0 )?"active":""} aria-current={(value === 0 )?"true":"false"} aria-label={`Slide ${value+1}`}></button>
                )}
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.musicplanet.co.nz/media/mageplaza/bannerslider/banner/image/m/p/lower-for-lockdown-sale.jpg" className="d-block w-100" alt="banner-sixth-img"/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.musicplanet.co.nz/media/mageplaza/bannerslider/banner/image/m/p/SUPRO-BANNER.jpg" className="d-block w-100" alt="banner-second-img"/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.musicplanet.co.nz/media/mageplaza/bannerslider/banner/image/m/p/D_Angelico-Banner-SEPT-NEW.jpg" className="d-block w-100" alt="banner-third-img"/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.musicplanet.co.nz/media/mageplaza/bannerslider/banner/image/m/p/lower-for-lockdown-sale.jpg" className="d-block w-100" alt="banner-fourth-img"/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.musicplanet.co.nz/media/mageplaza/bannerslider/banner/image/m/p/Korg-PA300-BANNER-Recovered.jpg" className="d-block w-100" alt="banner-fifth-img"/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.musicplanet.co.nz/media/mageplaza/bannerslider/banner/image/m/p/Bechstein-A190-BANNER---revamp.jpg" className="d-block w-100" alt="banner-first-img"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel