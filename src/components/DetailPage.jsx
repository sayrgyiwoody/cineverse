import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { api_key, image_api } from '../assets/api';
import { api } from '../assets/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie, removeSelectedMovie } from '../redux/action/movie';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";

const DetailPage = () => {

  let dispatch = useDispatch();

  const { movieId } = useParams();

  const [loadingStatus, setLoadingStatus] = useState(true);

  const getDetail = async () => {
    let res = await api.get(`movie/${movieId}?api_key=${api_key}&append_to_response=credits`);
    console.log(res.data)
    dispatch(selectMovie(res.data));
    setLoadingStatus(false);
  }

  useEffect(() => {
    getDetail();
    return () => {
      dispatch(removeSelectedMovie({}))
    }
  }, [])

  let movie = {};
  movie = useSelector((state) => state.movie.movie);

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
    <div className=' min-h-screen bg-slate-100 dark:bg-gray-900'>

      {JSON.stringify(movie) != "{}" && loadingStatus === false ? (
        <div style={backgroundImageStyle} className=" relative bg-cover bg-top bg-no-repeat ">

          <div className=' ' style={overlayStyle} ></div>
          <div className="z-10 relative md:flex gap-x-10 justify-center max-w-6xl p-10 mx-auto">
            <img className="rounded-lg  md:w-1/5  z-20 mb-4 md:mb-0 " src={movie.poster_path != null ? image_api + movie.poster_path : '/images/default.jpg'} alt="" />

            <div className="z-20 md:w-4/5 text-white">
                <h3 className='  text-3xl font-bold'>{movie.title} <span className="text-gray-300 text-2xl">( {movie.release_date.slice(0, 4)} )</span> </h3> 
              <div className="flex items-center mt-4 gap-x-3 mb-2  ">
                <div className="border-2 w-fit text-sm  rounded border-gray-300 px-2 py-1 font-medium text-gray-300">{movie.adult ? 'R' : 'PG - 13'}</div>
                <p className=' font-medium text-sm '>{movie.release_date} ({movie.original_language.toUpperCase()})</p>
                </div>
                <span className=' font-medium text-sm block md:inline-block '><RxDotFilled className=' inline-block' />{movie.genres.map(gen => gen.name + ', ')}</span>
                <span className=' font-medium text-sm  '><RxDotFilled className=' inline-block' />{convertMinToHrMin(movie.runtime)}</span>
              
              <p className=' italic text-gray-300 font-semibold my-4'>{movie.tagline}</p>
              <h3 className=' font-bold text-xl'>Overview</h3>
              <p className='  mt-2 mb-6'>{movie.overview}</p>
              <Link to="/" className=" duration-150 py-2.5 px-5 me-2 flex items-center w-fit gap-x-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-primaryHover dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-primary">
                <IoMdArrowRoundBack className=' w-5 h-5 inline-block' />
                Back Home</Link>
            </div>
          </div>
        </div>

      ) : (
        <div role="status" className="space-y-8 p-10 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
          <div className="flex items-center justify-center w-full h-80 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>



      )}
    </div>
  )
}

export default DetailPage
