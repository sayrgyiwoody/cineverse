import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { api_key, image_api } from '../assets/api';
import { api } from '../assets/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie, removeSelectedMovie } from '../redux/action/movie';
import DetailInfo from './DetailInfo';
import CastSwiper from './CastSwiper';
import DetailPlaceholder from './DetailPlaceholder';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const DetailPage = () => {



  let dispatch = useDispatch();

  const { movieId } = useParams();

  const [loadingStatus, setLoadingStatus] = useState(true);

  const getDetail = async () => {
    let res = await api.get(`movie/${movieId}?api_key=${api_key}&append_to_response=credits`);
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


  return (
    <div className=' bg-slate-100 dark:bg-gray-900'>

      {JSON.stringify(movie) != "{}" && loadingStatus === false ? (
        <div className="">
          <DetailInfo movie={movie}></DetailInfo>
        <div className="md:grid md:grid-cols-8 ">
          <div className=" md:col-span-6">

            <CastSwiper cast={movie?.credits?.cast}></CastSwiper>
          </div>

          <div className="text-gray-800 dark:text-slate-50 p-6 bg-white dark:bg-gray-800 md:col-span-2 h-full">
            <div className="flex gap-x-3 mb-6">
              <a href="#">
                <FaFacebook className=' hover:text-primary duration-150 cursor-pointer w-6 h-6' />
              </a>
              <a href="#">
                <FaInstagram className=' hover:text-primary duration-150 cursor-pointer w-6 h-6' />
              </a>
              |
              <a href={movie.homepage}>
                <FaLink className=' hover:text-primary duration-150 cursor-pointer w-6 h-6' />
              </a>
            </div>
              <p className='font-semibold'>Status</p>
              <p className='mb-4'>{movie.status}</p>

              <p className='font-semibold'>Original Language</p>
              <p className='mb-4'>{movie.original_language}</p>

              <p className=' font-semibold'>Budget</p>
              <p className='mb-4'>${movie.budget}</p>

              <p className=' font-semibold'>Revenue</p>
              <p className='mb-4'>${movie.revenue}</p>
          </div>
        </div>
        </div>

      ) : (
        <DetailPlaceholder></DetailPlaceholder>
      )}




    </div>


  )
}

export default DetailPage
