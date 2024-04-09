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
                                cast.profile_path == null ? (<svg className="w-full p-2 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                            </svg>):
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