import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image';
import ngoimg2 from "/public/Images/ngoimg2.jpg";
import ngoimg1 from "/public/Images/ngoimg1.jpg";

const ImageSlider = ({images}) => {
    const settings = {
        dots:true,
        speed:1000,
        slideToShow:1,
        slideToScroll:1,
        initialSlide:0,
        pauseOnHover:true,
        autoplay:true,
    }
  return (
    <div className='image__slider__container'>
       <Slider {...settings}>
          {
            images.map((ngoimg1,index)=>(
                <Image src={ngoimg1} alt="" key={index} />
            ))
          }
       </Slider>
    </div>
  )
}

export default ImageSlider;