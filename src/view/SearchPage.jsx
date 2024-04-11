import React, { useEffect, useState } from 'react'
import ScrollTop from '../components/layout/ScrollTop'
import SearchResults from '../components/search/SearchResults'
import MovieList from '../components/home/MovieList';
import PlaceHolderList from '../components/placeholders/PlaceHolderList';
import { useSelector, useDispatch } from 'react-redux';
import { setLoadingStatus } from '../redux/action/loading';
import { api, api_key } from '../assets/api';
import { fetchMovies, setCurrentPage, setTotalMovies, setTotalPage } from '../redux/action/movie';
import { useLocation, useNavigate } from 'react-router';

const SearchPage = () => {

  let dispatch = useDispatch();
  let navigate = useNavigate();


  let loadingStatus = true; 
  loadingStatus = useSelector((state)=>state.loading.isLoading)

  let searchKey = ''; 
  searchKey = useSelector((state)=>state.movie.searchKey);

  let currentPage = 1; 
  currentPage = useSelector((state)=>state.movie.currentPage);

  // scroll to top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // search movie api 
  const searchMovie = async () => {
    dispatch(setLoadingStatus(true));
    try {
        let res = {};
        if (searchKey !== '') {
            
            res = await api.get(`search/movie?query=${searchKey}&api_key=${api_key}&page=${currentPage}`);
            dispatch(setTotalPage(res.data.total_pages));
            dispatch(fetchMovies(res.data.results));
            dispatch(setTotalMovies(res.data.total_results));
        }
        

    } catch (error) {
        // Handle error (e.g., log, display error message)
        console.error('Error searching movie:', error);
    } finally {
        // Ensure that loading status is set to false regardless of success or failure
        dispatch(setLoadingStatus(false));
    }
}

useEffect(()=> {
  if(searchKey !== ''){
    scrollToTop();
    searchMovie();
  }else {
    navigate('/');
  }
},[searchKey,currentPage]);

  return (
      <div className='relative min-h-screen bg-slate-100 dark:bg-gray-900 p-3 md:px-14 md:py-6'>
        <div className="md:flex md:gap-x-6">
          <div className="">
            <SearchResults></SearchResults>
          </div>
          <div className=' w-full' >

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
  )
}

export default SearchPage
