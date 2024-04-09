import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, FreeMode, } from 'swiper/modules';
import CastPlaceholder from './CastPlaceholder';

const CastSwiperPlaceholder = () => {

    let paginatedCast = [];

    let slidesPerView = 6;
   

    // Update slidesPerView based on screen size
    if (window.innerWidth < 768) { // Mobile devices
        slidesPerView = 2;
    } else if (window.innerWidth <= 1024) { // Tablets
        slidesPerView = 4;
    }

    return (
        <>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={15}
                freeMode={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Autoplay]}

                className="mySwiper p-5"
            >

                {Array.from({ length: 6 }, (_, index) => (
                    <SwiperSlide key={index} className='  text-gray-800 dark:text-slate-100'>

                    <CastPlaceholder></CastPlaceholder>

                </SwiperSlide>
                ))}
                


            </Swiper>
        </>
    );
}

export default CastSwiperPlaceholder