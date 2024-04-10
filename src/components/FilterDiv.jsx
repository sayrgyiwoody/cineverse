import React, { useEffect, useState } from 'react'
import useToggle from '../hooks/useToggle'
import { api, api_key } from '../assets/api';
import Datepicker from 'react-tailwindcss-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, setCurrentPage, setFilterData, setTotalPage } from '../redux/action/movie';
import { setLoadingStatus } from '../redux/action/loading';

const FilterDiv = () => {

  let dispatch = useDispatch();

  let currentPage = useSelector((state) => state.movie.currentPage);


  const [selectedGenres, setSelectedGenres] = useState([]);

  const [showSorting, toggleSorting] = useToggle(false);

  const [showFilter, toggleFilter] = useToggle(false);

  const [genres, setGenres] = useState([]);

  const fetchGenreIds = async () => {
    let res = await api.get(`/genre/movie/list?api_key=${api_key}`);
    setGenres(res.data.genres);
  }

  useEffect(() => {
    fetchGenreIds();
  }, [])


  const filterMovies = async () => {
    dispatch(setCurrentPage(1));
    dispatch(setFilterData({
      genres : getSelectedGenresString(),
    }))
  }


  const selectGenre = (genreId) => {
    // Check if the genre is already selected
    const index = selectedGenres.indexOf(genreId);
    if (index === -1) {
      // If not selected, add it to the selectedGenres array
      setSelectedGenres([...selectedGenres, genreId]);
    } else {
      // If already selected, remove it from the selectedGenres array
      const updatedGenres = [...selectedGenres];
      updatedGenres.splice(index, 1);
      setSelectedGenres(updatedGenres);
    }
  }

  // Function to check if a genre is selected
  const isSelected = (genreId) => {
    // Return true if the genreId exists in selectedGenres array, false otherwise
    return selectedGenres.includes(genreId);
  };

  // Function to get the selected genres as a comma-separated string
  const getSelectedGenresString = () => {
    return selectedGenres.join(',');
  };

  return (
    <div >

      <div className='bg-white dark:bg-gray-800 rounded-xl md:w-[17rem] mb-3' >
        <h2 id="accordion-collapse-heading-1">
          <button onClick={() => toggleSorting()} type="button" className={`${showSorting ? 'rounded-t-xl' : 'rounded-xl'} flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-gray-200  focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 gap-3`}>
            <span>Sort Movies</span>
            <svg data-accordion-icon className={`w-3 h-3 ${showSorting ? 'rotate-180' : 'rotate-90'} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div className={`${showSorting ? '' : 'hidden'}`}>
          <div className="p-5  border rounded-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
            <p className="text-gray-500 dark:text-gray-400">Action</p>
          </div>
        </div>


      </div>

      <div className='bg-white dark:bg-gray-800 rounded-xl md:w-[17rem] mb-3' >
        <h2 id="accordion-collapse-heading-1">
          <button onClick={() => toggleFilter()} type="button" className={`${showFilter ? 'rounded-t-xl' : 'rounded-xl'} flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-gray-200  focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 gap-3`}>
            <span>Filter Movies</span>
            <svg data-accordion-icon className={`w-3 h-3 ${showFilter ? 'rotate-180' : 'rotate-90'} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div className={`${showFilter ? '' : 'hidden'}`}>
          <div className="p-5  border rounded-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900">

            {/* <p className="mb-4 text-gray-900 font-semibold dark:text-white">Release Date</p>



            <Datepicker
              value={value}
              onChange={handleValueChange}
            /> */}




            <p className="mb-4 text-gray-900 font-semibold dark:text-white">Genres</p>

            <div className="flex flex-wrap ">
              {genres.map((genre, index) => (
                <p onClick={() => selectGenre(genre.id)} key={index} className={`text-gray-600 me-2 mb-2 text-sm cursor-pointer dark:text-gray-300 rounded-3xl border px-3 py-1 flex items-center justify-center ${isSelected(genre.id) ? 'bg-primary text-white' : 'md:hover:bg-primaryHover hover:text-white'
                  }`}>{genre.name}</p>
              ))}
            </div>

          </div>
        </div>


      </div>

      <button onClick={() => filterMovies()} type="button" className="w-full text-white bg-primary hover:bg-primaryHover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary dark:hover:bg-primaryHover focus:outline-none dark:focus:ring-blue-800">Search</button>

    </div>
  )
}

export default FilterDiv
