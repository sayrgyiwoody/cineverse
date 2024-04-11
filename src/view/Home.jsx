import React, { useEffect, useState } from 'react'
import MovieList from '../components/home/MovieList'
import { api, api_key } from '../assets/api'
import FilterDiv from '../components/home/FilterDiv'
import { fetchMovies, setFilterData, setTotalPage } from '../redux/action/movie'
import { useDispatch, useSelector } from 'react-redux'
import PlaceHolderList from '../components/placeholders/PlaceHolderList'
import ScrollTop from '../components/layout/ScrollTop'
import Navbar from '../components/layout/Navbar'
import { setLoadingStatus } from '../redux/action/loading'
import { useLocation } from 'react-router'

const Home = () => {


  let currentPage = useSelector((state) => state.movie.currentPage);
  let filterData = useSelector((state) => state.movie.filterData);


  let dispatch = useDispatch();

  let loadingStatus = useSelector((state)=>state.loading.isLoading);
   
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };

  const getMovies = async () => {
    dispatch(setLoadingStatus(true));
    let res = await api.get(`/discover/movie?sort_by=${filterData.sortBy}&primary_release_date.gte=${filterData.startDate}&primary_release_date.lte=${filterData.endDate}&with_genres=${filterData.genres}&api_key=${api_key}&page=${currentPage}`);
    dispatch(fetchMovies(res.data.results))
    dispatch(setTotalPage(res.data.total_pages))
    // dispatch(setTotalPage(112))
    dispatch(setLoadingStatus(false));
  }

  useEffect(() => {
    scrollToTop();
      getMovies();

    return () => {
      dispatch(fetchMovies([]));
    }
  }, [currentPage , filterData]);


  




  return (
   <div>
    <div className='relative min-h-screen bg-slate-100 dark:bg-gray-900 p-3 md:p-6'>
      <div className="md:flex md:gap-x-6">
       <div className="mb-4 md:mb-0 hidden md:block">
       <FilterDiv></FilterDiv>
       </div>
        <div >

        {loadingStatus !== true ? (
          <MovieList></MovieList>
        ) : (
          <PlaceHolderList></PlaceHolderList>
        )
        }
          

        </div>
      </div>
        <ScrollTop></ScrollTop>
    </div>
   </div>
  )
}

export default Home
