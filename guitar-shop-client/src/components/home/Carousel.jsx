import React from 'react'

function Carousel() {
    const imageData=[
        "https://www.musicplanet.co.nz/media/mageplaza/bannerslider/banner/image/m/p/lower-for-lockdown-sale.jpg",
        "https://www.musicplanet.co.nz/media/mageplaza/bannerslider/banner/image/m/p/SUPRO-BANNER.jpg",
        "https://www.musicplanet.co.nz/media/mageplaza/bannerslider/banner/image/m/p/D_Angelico-Banner-SEPT-NEW.jpg",
        "https://www.musicplanet.co.nz/media/mageplaza/bannerslider/banner/image/m/p/lower-for-lockdown-sale.jpg",
        "https://www.musicplanet.co.nz/media/mageplaza/bannerslider/banner/image/m/p/Korg-PA300-BANNER-Recovered.jpg" ,
        "https://www.musicplanet.co.nz/media/mageplaza/bannerslider/banner/image/m/p/Bechstein-A190-BANNER---revamp.jpg"
    ]

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {imageData.map((value, index)=>
                    <button key={`slider${index}`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={(index === 0 )?"active":""} aria-current={(index === 0 )?"true":"false"} aria-label={`Slide ${value+1}`}></button>
                )}
            </div>
            <div className="carousel-inner">
                {imageData.map((imageUrl, index)=>{
                    return(
                        <div key={`slideImg${index}`} className={(index===0)? "carousel-item active":"carousel-item"}>
                            <img src={imageUrl} className="d-block w-100" alt="banner-sixth-img"/>
                        </div>
                    )
                })}
                
            </div>
            {["prev", "next"].map((buttonName, index)=>{
                return(
                    <button key={`slideButton${index}`} className={`carousel-control-${buttonName}`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide={buttonName}>
                        <span className={`carousel-control-${buttonName}-icon`} aria-hidden="true"></span>
                        <span className="visually-hidden">{buttonName}</span>
                    </button>
                )
            })}
        </div>
    )
}

export default Carousel