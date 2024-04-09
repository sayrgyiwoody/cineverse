import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Autoplay ,FreeMode, } from 'swiper/modules';
import { image_api } from '../assets/api';

const CastSwiper = ({cast}) => {

    let paginatedCast = [];

    if (cast) {
        paginatedCast = cast.slice(0, 9);
    }

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
                modules={[FreeMode,Autoplay]}
               
                className="mySwiper p-5"
            >
                
                { paginatedCast.map((cast,index) =>(
                    <SwiperSlide key={index} className='  text-gray-800 dark:text-slate-100'>


                    <div  className=" bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                        
                            {
                                cast.profile_path == null ? (
                                    <svg className=" mb-8 h-32 mx-auto mt-8 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                ):
                            (
                            <img className="rounded-t-xl max-h-48 w-full object-cover object-center" src={image_api + cast.profile_path} alt="" />
                            )
                            }
                        <div className="p-3">
                            <h5 className="md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{cast.name}</h5>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">{cast.character}</p>

                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default CastSwiper