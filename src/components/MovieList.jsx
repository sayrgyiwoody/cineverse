import React, { useState } from 'react'
import { api, image_api } from '../assets/api'
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import PlaceholderCard from './PlaceholderCard';
import Pagination from './Pagination';

const MovieList = ({ loadingStatus }) => {


    let movies = [];
    movies = useSelector((state) => state.movie.movies);

    let circumference = 2 * 22 / 7 * 40;


    return (
        <div className=' grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 '>
            {
                movies.map((movie,index)=>(
                    <MovieCard key={movie.id} data={movie}></MovieCard>
                ))
            }

            <Pagination></Pagination>

        </div>
    )
}

export default MovieList
