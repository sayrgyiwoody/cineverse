import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { api_key, image_api } from '../assets/api';
import { api } from '../assets/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie, removeSelectedMovie } from '../redux/action/movie';
import DetailInfo from './DetailInfo';
import CastSwiper from './CastSwiper';
import DetailPlaceholder from './DetailPlaceholder';


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
    <div className=' min-h-screen bg-slate-100 dark:bg-gray-900'>

      {JSON.stringify(movie) != "{}" && loadingStatus === false ? (
      <DetailInfo movie={movie}></DetailInfo>

      ) : (
        <DetailPlaceholder></DetailPlaceholder>
      )}
    
    <div className="md:grid md:grid-cols-8 ">
      <div className=" md:col-span-6">
      { movie &&  
    <CastSwiper cast={movie?.credits?.cast}></CastSwiper>
    }
      </div>
    
    <div className="">

    </div>
    </div>

    </div>


  )
}

export default DetailPage
