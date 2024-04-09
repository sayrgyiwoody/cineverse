import React from 'react'

const CastPlaceholder = () => {
    return (
        <div>
            <div role="status" className=" bg-white dark:bg-gray-800 flex flex-col py-3 md:py-4 px-4 md:px-6 border border-gray-200 rounded shadow animate-pulse  dark:border-gray-700">
                <svg className=" mb-5 h-32  text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default CastPlaceholder
