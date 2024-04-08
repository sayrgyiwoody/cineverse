import React from 'react'
import useToggle from '../hooks/useToggle'

const FilterDiv = () => {


  const [showSorting, toggleSorting] = useToggle(false);

  const [showFilter, toggleFilter] = useToggle(false);



  return (
    <div >

      <div className='bg-white dark:bg-gray-800 rounded-xl md:w-64 mb-3' >
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
            <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
          </div>
        </div>


      </div>

      <div className='bg-white dark:bg-gray-800 rounded-xl md:w-64 mb-3' >
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
            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
            <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
          </div>
        </div>


      </div>

      <button type="button" className="w-full text-white bg-primary hover:bg-primaryHover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary dark:hover:bg-primaryHover focus:outline-none dark:focus:ring-blue-800">Search</button>

    </div>
  )
}

export default FilterDiv
