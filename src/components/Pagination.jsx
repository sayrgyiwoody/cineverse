import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentPage } from '../redux/action/movie';


const Pagination = () => {

  let dispatch = useDispatch();

  let totalPages = useSelector((state) => state.movie.totalPage);
  let currentPage = useSelector((state) => state.movie.currentPage);

  const generatePaginationNumbers = () => {
    let shownPages = 3;
    let paginationNumbers = [];
    if (currentPage > totalPages - shownPages) {
      paginationNumbers.push(totalPages - 2, totalPages - 1, totalPages);
    } else {
        paginationNumbers.push(currentPage, currentPage + 1, currentPage + 2, '...', totalPages);
    }
    return paginationNumbers;
  }

  const handlePageClick = (pageNumber) => {


    if (typeof pageNumber === 'number') {
      if (pageNumber < 1 || pageNumber > totalPages) {
      }else {
        dispatch(setCurrentPage(pageNumber));
      }
    }

  };

  return (
    <div className=" flex items-center justify-between   px-4 py-3 sm:px-6">
      {
        totalPages > 1 && 
        <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-slate-200 mb-3 md:mb-0">
            Showing 20 movies  from 
            <span className="font-medium"> {totalPages}</span> pages
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <div
              onClick={() => handlePageClick(currentPage - 1)}
              className="relative cursor-pointer inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 bg-white dark:bg-gray-950"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            {generatePaginationNumbers().map((pageNumber, index) => (
              <div key={index}
                onClick={() => handlePageClick(pageNumber)}
                className={`relative z-10 inline-flex items-center cursor-pointer   ${currentPage == pageNumber ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-400 ring-1 ring-inset ring-gray-300'}  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {pageNumber}
              </div>
            ))}


            <div
              onClick={() => handlePageClick(currentPage + 1)}
              className="relative cursor-pointer inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 bg-white dark:bg-gray-950"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
      }
      
    </div>
  )
}

export default Pagination