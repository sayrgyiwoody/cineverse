import React from 'react'
import { image_api } from '../assets/api';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const DetailInfo = ({movie}) => {

    const getPercent = (vote_average) => {
        return Math.round(vote_average * 10);
    }
    
    const getRadialStyle = (rating) => {
        let textColor = "#ffffff";
        let pathColor = null;
    
        if (rating >= 70) {
            pathColor = "#0bb07e";
    
        } else if (rating >= 40) {
            pathColor = "#FACA15";
    
        } else {
            pathColor = "#E02424";
        }
    
        return {
            textColor: textColor,
            pathColor: pathColor,
        }
    }


    let bgImage = image_api + movie.backdrop_path;


    const backgroundImageStyle = {
      backgroundImage: `url(${bgImage})`
    };
  
    const overlayStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };
  
    function convertMinToHrMin(minutes) {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return `${hours}h ${remainingMinutes}m`;
    }

  return (
    <div>
      <div style={backgroundImageStyle} className=" relative bg-cover bg-top bg-no-repeat ">

<div className=' ' style={overlayStyle} ></div>

<div className="z-10 relative max-w-6xl px-10 pt-6 pb-10 mx-auto">
<Link to="/" className=" duration-150 py-2.5 px-5 me-2 mb-5 flex items-center w-fit gap-x-1 text-sm font-medium text-primary focus:outline-none  rounded-lg border border-primary  z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700  dark:text-primary dark:border-primary hover:bg-primaryHover hover:text-white dark:hover:text-white dark:hover:bg-primaryHover">
      <IoMdArrowRoundBack className=' w-5 h-5 inline-block' />
      Back Home</Link>
  <div className=" md:flex gap-x-10 justify-center">
  <img className="rounded-lg  md:w-1/5  z-20 mb-4 md:mb-0 " src={movie.poster_path != null ? image_api + movie.poster_path : '/images/default.jpg'} alt="" />

<div className="z-20 md:w-4/5 text-white">
    <h3 className='  text-3xl font-bold'>{movie.title} <span className="text-gray-300 text-2xl">( {movie.release_date.slice(0, 4)} )</span> </h3> 
  <div className="md:flex items-center gap-x-3 mt-2 md:text-sm text-lg ">
    <div className="flex items-center mt-4 mb-5 md:my-2 gap-x-2">
        <div className=" w-14 h-14">
                <CircularProgressbar styles={buildStyles(getRadialStyle(getPercent(movie.vote_average)))} value={getPercent(movie.vote_average)} text={`${getPercent(movie.vote_average)}%`} />
        </div>
        <p className=' font-medium text-slate-200'>User Score</p>
    </div>
    <div className="flex items-center gap-x-2">
    <div className="border-2 w-fit  rounded border-gray-300 px-2 py-1 font-medium text-gray-300">{movie.adult ? 'R' : 'PG - 13'}</div>
    <p className=' font-medium '>{movie.release_date} ({movie.original_language.toUpperCase()})</p>
    
    </div>
    <div className="md:flex gap-x-2 mt-3 md:mt-0">
      <p className=' font-medium block md:inline-block mb-1 md:mb-0'><RxDotFilled className=' inline-block' />{movie.genres.map(gen => gen.name + ', ')}</p>
      <p className=' font-medium  '><RxDotFilled className=' inline-block' />{convertMinToHrMin(movie.runtime)}</p>
    
    </div>
    
    </div>
    
  <p className=' italic text-gray-300 font-semibold my-4 md:mt-2 md:mb-4'>{movie.tagline}</p>
  <h3 className=' font-bold text-xl'>Overview</h3>
  <p className='  mt-2 mb-6'>{movie.overview}</p>
 
  
</div>
  </div>
</div>
</div>
    </div>
  )
}

export default DetailInfo
