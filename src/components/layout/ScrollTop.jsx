import React, { useEffect, useState } from 'react'
import { BiArrowToTop } from "react-icons/bi";

const ScrollTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" 
        });
      };

      const [isVisible, setIsVisible] = useState(false);


      useEffect(() => {
        const toggleVisibility = () => {
          if (window.pageYOffset > 100) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        // Event listener to handle scroll
        window.addEventListener('scroll', toggleVisibility);
    
        // Clean up the event listener
        return () => window.removeEventListener('scroll', toggleVisibility);
      }, []);

  return (
    <div>
    {
        isVisible && (
        <button className='fixed z-50 right-2 bottom-4 text-white  rounded-full flex items-center justify-center w-12 h-12 bg-primary hover:bg-primaryHover' onClick={scrollToTop} >
        <BiArrowToTop className='w-8 h-8' />
        </button>
    )}
    
    </div>
  )
}

export default ScrollTop
