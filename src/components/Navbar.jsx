import React, { useEffect, useRef, useState } from 'react'
import menuStyles from '../assets/css/menu-icon.module.css'
import { api, api_key } from '../assets/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/action/movie';
import { Link, useNavigate } from 'react-router-dom';
import "../../node_modules/@theme-toggles/react/css/Expand.css"
import { Expand } from '@theme-toggles/react';
import useLocalStorage from '../hooks/useLocalStorage';

const Navbar = () => {

  let dispatch = useDispatch();
  let navigate = useNavigate();

  // darkMode 
  const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', false);

  const handleToggle = () => {
    setIsDarkMode((pre) => !pre);
  };

  useEffect(() => {
    isDarkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [isDarkMode])

  //-----

  // show menu mobile 
  const [menuStatus, setMenuStatus] = useState(false);

  // search movie 
  const [searchKey,setSearchKey] = useState('');

  const searchMovie = async () => {
    navigate("/");
    let res = {};
    if (searchKey !== '') {
      res = await api.get(`search/movie?query=${searchKey}&api_key=${api_key}`);
    } else {
      res = await api.get(`movie/popular?api_key=${api_key}`);
    }
    console.log(res.data)
    dispatch(fetchMovies(res.data.results))

  }

  //-----

  return (


    <nav className="bg-white border-gray-200 dark:bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo.svg" className="h-8" alt="Logo" />
        </Link>
        <div onClick={handleToggle} className="cursor-pointer bg-slate-100 dark:bg-gray-700 dark:border-gray-700 text-gray-900 dark:text-white w-10 h-10 flex items-center justify-center border-[1.5px] rounded-full">
  <Expand toggled={isDarkMode} className=' text-xl'  />
</div>

        <div className="flex md:order-2">
          <button onClick={() => setMenuStatus(true)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} onKeyUp={(e) => {
              if (e.key === "Enter") {
                searchMovie();
              }
            }} type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
          </div>
          <span className="sr-only">Open main menu</span>
          <div onClick={() => setMenuStatus((prev) => !prev)} className={`${menuStyles.menuIcon} ${menuStatus && menuStyles.show} ms-4 md:hidden bg-gray-100  dark:bg-gray-600   border border-gray-200  dark:border-0 rounded-md`}>
            <span className="bg-gray-800 dark:bg-white "></span>
            <span className="bg-gray-800 dark:bg-white "></span>
            <span className="bg-gray-800 dark:bg-white "></span>
          </div>
        </div>

        <div className={` ${menuStatus ? '' : 'hidden'} items-center justify-between  w-full md:flex md:w-auto md:order-1`} id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} onKeyUp={(e) => {
              if (e.key === "Enter") {
                searchMovie();
              }
            }} type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-primaryHover rounded md:bg-transparent md:text-primaryHover md:p-0 md:dark:text-primary" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primaryHover md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primaryHover md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
          </ul>
        </div>


      </div>
    </nav>

  )
}

export default Navbar
