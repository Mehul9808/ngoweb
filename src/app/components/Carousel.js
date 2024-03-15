

import ngoimg1 from "/public/Images/ngoimg1.jpg";
import ngoimg2 from "/public/Images/ngoimg2.jpg";
import ngoimg3 from "/public/Images/ngoimg3.jpg";
import ngoimg4 from "/public/Images/ngoimg4.jpg";
import ngoimg24 from "/public/Images/ngoimg24.jpg";
import Image from 'next/image';

 import React, { useRef, useState } from 'react';
 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () =>  {
  return (
    <>
    <div className="shapedividers_com-4475">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>  
                 <div className="relative w-full h-screen">
          <Image src={ngoimg24} alt="Slide 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
               
               <p className="text-4xl py-4 font-bold bannerpara ">"Empowering Communities Through Education"</p>
               <p>&nbsp;</p>
               <p className="text-4xl py-4 font-bold bannerpara ">"Join Us in Building a Brighter Future"</p>
               <p>&nbsp;</p>
               <p className="text-4xl py-4 font-bold bannerpara ">"Together, We Make a Difference"</p>
               <p>&nbsp;</p>
               <p className="text-4xl py-4 font-bold bannerpara ">"Educate, Inspire, Transform"</p>

            </div>
           </div>
         </div></SwiperSlide>
        <SwiperSlide> <div className="relative w-full h-screen">
           <Image src={ngoimg1} alt="Slide 2" className="w-full h-full object-cover" />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-white text-center">
             <p className="text-4xl py-4 font-bold bannerpara ">"Empowering Communities Through Education"</p>
               <p>&nbsp;</p>
               <p className="text-4xl py-4 font-bold bannerpara ">"Join Us in Building a Brighter Future"</p>
               <p>&nbsp;</p>
               <p className="text-4xl py-4 font-bold bannerpara ">"Together, We Make a Difference"</p>
               <p>&nbsp;</p>
               <p className="text-4xl py-4 font-bold bannerpara ">"Educate, Inspire, Transform"</p>
             </div>
           </div>
         </div></SwiperSlide>
        <SwiperSlide>
        <div className="relative w-full h-screen">
           <Image src={ngoimg3} alt="Slide 2" className="w-full h-full object-cover" />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-white text-center">
             <p className="text-4xl py-4 font-bold bannerpara ">"Empowering Communities Through Education"</p>
               <p>&nbsp;</p>
               <p className="text-4xl py-4 font-bold bannerpara ">"Join Us in Building a Brighter Future"</p>
               <p>&nbsp;</p>
               <p className="text-4xl py-4 font-bold bannerpara ">"Together, We Make a Difference"</p>
               <p>&nbsp;</p>
               <p className="text-4xl py-4 font-bold bannerpara ">"Educate, Inspire, Transform"</p>
             </div>
           </div>
          
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-full h-screen">
           <Image src={ngoimg2} alt="Slide 2" className="w-full h-full object-cover" />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-white text-center">
             <p className="text-4xl py-4 font-bold bannerpara ">"Empowering Communities Through Education"</p>
               <p>&nbsp;</p>
               <p className="text-4xl py-4 font-bold bannerpara ">"Join Us in Building a Brighter Future"</p>
               <p>&nbsp;</p>
               <p className="text-4xl py-4 font-bold bannerpara ">"Together, We Make a Difference"</p>
               <p>&nbsp;</p>
               <p className="text-4xl py-4 font-bold bannerpara ">"Educate, Inspire, Transform"</p>
             </div>
           </div>
         </div>
      
        </SwiperSlide>
    
      </Swiper>
      </div>
    </>
  );
}

 
export default Carousel;
