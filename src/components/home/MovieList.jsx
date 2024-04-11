import React, { useState } from 'react'
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import Pagination from '../layout/Pagination';
import Lottie from 'react-lottie';
import animationData from '../../lotties/noData.json';

const MovieList = ({ loadingStatus }) => {

    const defaultLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    let movies = [];
    movies = useSelector((state) => state.movie.movies);

    let circumference = 2 * 22 / 7 * 40;


    return (
        <div className=' w-full'>
            <div className=' grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 '>
                {
                    movies.map((movie, index) => (
                        <MovieCard key={movie.id} data={movie}></MovieCard>
                    ))
                }

                



            </div>
            {movies && movies.length === 0 && (
                    <div className="w-full h-screen flex flex-col mt-10 md:mt-20 items-center">
                        <Lottie
                        options={defaultLottieOptions}
                        height={300}
                        width={300}
                    />
                    <p className=' text-gray-800 dark:text-slate-100 font-semibold'>Sorry , No Movie to Show</p>
                    </div>

                )}
            <div className="md:mt-6 mt-3 md:mb-9 ">
                <Pagination></Pagination>
            </div>
        </div>
    )
}

export default MovieList
