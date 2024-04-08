import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'
import { api, api_key } from '../assets/api'
import FilterDiv from './FilterDiv'
import { fetchMovies, setTotalPage } from '../redux/action/movie'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from './Pagination'

const Home = () => {

  let currentPage = useSelector((state) => state.movie.currentPage)

  let dispatch = useDispatch();

  const getMovies = async () => {
    let res = await api.get(`movie/popular?api_key=${api_key}&page=${currentPage}`);

    dispatch(fetchMovies(res.data.results))
    dispatch(setTotalPage(res.data.total_pages))
  }

  useEffect(() => {
    getMovies();

    return () => {
      dispatch(fetchMovies([]));
    }
  }, [currentPage])

  return (
    <div className=' min-h-screen bg-slate-100 dark:bg-gray-900 p-3 md:p-6'>
      <div className="md:flex md:gap-x-6">
       <div className="mb-4 md:mb-0">
       <FilterDiv></FilterDiv>
       </div>
        <div className="">
          <MovieList></MovieList>
          <Pagination ></Pagination>

        </div>
      </div>

    </div>
  )
}

export default Home
