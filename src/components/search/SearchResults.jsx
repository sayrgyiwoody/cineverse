import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const SearchResults = () => {

  let totalMovies = 0;
  totalMovies = useSelector((state)=>state.movie.totalMovies);

  let searchKey = 0;
  searchKey = useSelector((state)=>state.movie.searchKey);

  return (

      <div className='bg-white dark:bg-gray-800 rounded-xl w-full md:w-[17rem] mb-4 md:mb-0 shadow-sm border border-gray-200 dark:border-gray-700' >
        <div className=" text-gray-800 dark:text-slate-100 p-4">
          <p className=' text-gray-600 dark:text-muted'>Found <span className=' text-gray-800 dark:text-white font-medium text-lg'>{totalMovies}</span> Movies with search key : <span className=' text-gray-800 dark:text-white font-medium text-lg'>{searchKey}</span> </p>
        </div>

      </div>
      
  )
}

export default SearchResults
