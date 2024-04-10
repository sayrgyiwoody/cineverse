import React, { useEffect, useState } from 'react'
import useToggle from '../hooks/useToggle'
import { api, api_key } from '../assets/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, setCurrentPage, setFilterData, setTotalPage } from '../redux/action/movie';
import { setLoadingStatus } from '../redux/action/loading';
import { useNavigate } from 'react-router';

const FilterDiv = () => {

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let currentPage = useSelector((state) => state.movie.currentPage);


  const [selectedGenres, setSelectedGenres] = useState([]);

  const [showSorting, toggleSorting] = useToggle(false);

  const [showFilter, toggleFilter] = useToggle(false);

  const [genres, setGenres] = useState([]);
  const [selectedSorting, setSelectedSorting] = useState("popularity.desc")

  const fetchGenreIds = async () => {
    let res = await api.get(`/genre/movie/list?api_key=${api_key}`);
    setGenres(res.data.genres);
  }

  // Function to get current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // State to store the selected start date
  const [startDate, setStartDate] = useState(''); // Initialize with current date
  const [endDate, setEndDate] = useState(getCurrentDate());

  useEffect(() => {
    fetchGenreIds();
  }, [])


  const filterMovies = async () => {
    dispatch(setCurrentPage(1));
    dispatch(setFilterData({
      genres: getSelectedGenresString(),
      sortBy: selectedSorting,
      startDate : startDate,
      endDate : endDate,
    }));
    navigate("/");
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
          <button onClick={() => toggleSorting()} type="button" className={`${showSorting ? 'rounded-t-xl' : 'rounded-xl'} flex items-center justify-between w-full  px-5 py-2 md:p-5 font-medium rtl:text-right text-gray-700 border border-gray-200  focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-200 md:hover:bg-gray-50 md:dark:hover:bg-gray-700 gap-3`}>
            <span>Sort Movies</span>
            <svg data-accordion-icon className={`w-3 h-3 ${showSorting ? 'rotate-180' : 'rotate-90'} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div className={`${showSorting ? '' : 'hidden'}`}>
          <div className=" border rounded-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <div className="border-b border-b-gray-300 dark:border-b-gray-700 p-5">
              <p className="mb-4 text-gray-900 font-semibold dark:text-white">Sort Results By</p>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                value={selectedSorting}
                onChange={(e) => setSelectedSorting(e.target.value)}
              >
                <option value="popularity.desc">Popularity Descending</option>
                <option value="popularity.asc">Popularity Ascending</option>
                <option value="vote_average.desc">Rating Descending</option>
                <option value="vote_average.asc">Rating Ascending</option>
                <option value="primary_release_date.desc">Release Date Descending</option>
                <option value="primary_release_date.asc">Release Date Ascending</option>
                <option value="title.desc">Title (A-Z)</option>
                <option value="title.asc">Title (Z-A)</option>
              </select>

            </div>
          </div>
        </div>


      </div>

      <div className='bg-white dark:bg-gray-800 rounded-xl md:w-[17rem] mb-3' >
        <h2 id="accordion-collapse-heading-1">
          <button onClick={() => toggleFilter()} type="button" className={`${showFilter ? 'rounded-t-xl' : 'rounded-xl'} flex items-center justify-between w-full  px-5 py-2 md:p-5 font-medium rtl:text-right text-gray-700 border border-gray-200  focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-200 md:hover:bg-gray-50 md:dark:hover:bg-gray-700 gap-3`}>
            <span>Filter Movies</span>
            <svg data-accordion-icon className={`w-3 h-3 ${showFilter ? 'rotate-180' : 'rotate-90'} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div className={`${showFilter ? '' : 'hidden'}`}>
          <div className=" border rounded-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800">

            <div className="border-b border-b-gray-300 dark:border-b-gray-700 px-4 py-2 md:p-5">
              <p className="mb-4 text-lg text-gray-900 font-semibold dark:text-white">Release Dates</p>

              <div className="relative flex  items-center gap-x-4 mb-4">
                <label htmlFor="" className=' text-gray-600 dark:text-slate-200'>From </label>
                <input onChange={(e) => setStartDate(e.target.value)} value={startDate} name="start" type="date" className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="Select date start" />
              </div>

              <div className="relative flex  items-center gap-x-4 mb-4">

                <label htmlFor="" className=' text-gray-600 dark:text-slate-200'>To </label>
                <input onChange={(e) => setEndDate(e.target.value)} value={endDate} name="start" type="date" className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="Select date start" />

              </div>

            </div>

            <div className="border-b border-b-gray-300 dark:border-b-gray-700 px-4 py-2 md:p-5">
              <p className="mb-4 text-lg text-gray-900 font-semibold dark:text-white">Genres</p>

              <div className="flex flex-wrap ">
                {genres.map((genre, index) => (
                  <p onClick={() => selectGenre(genre.id)} key={index} className={`text-gray-600 me-2 mb-2 text-sm cursor-pointer dark:text-gray-200 rounded-3xl border px-3 py-1 flex items-center justify-center ${isSelected(genre.id) ? 'bg-primary text-white' : 'md:hover:bg-primaryHover hover:text-white'
                    }`}>{genre.name}</p>
                ))}
              </div>
            </div>






          </div>
        </div>


      </div>

      <button onClick={() => filterMovies()} type="button" className="w-full text-white bg-primary hover:bg-primaryHover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary dark:hover:bg-primaryHover focus:outline-none dark:focus:ring-blue-800">Search</button>

    </div>
  )
}

export default FilterDiv
