import React from 'react'
import { Link } from 'react-router-dom'
import { image_api } from '../assets/api'
import { AiFillStar } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MovieCard = ({ data }) => {

    const getPercent = (vote_average) => {
        return Math.round(vote_average * 10);
    }

    const getRadialStyle = (rating) => {
        let textColor = null;
        let pathColor = null;

        if (rating >= 70) {
            textColor = "#0bb07e";
            pathColor = "#0bb07e";

        } else if (rating >= 40) {
            textColor = "#FACA15";
            pathColor = "#FACA15";

        } else {
            textColor = "#E02424";
            pathColor = "#E02424";
        }

        return {
            textColor: textColor,
            pathColor: pathColor,
        }
    }

    return (
        <Link to={`/detail/${data.id}`}>
            <div key={data.id} className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-xl" src={data.poster_path != null ? image_api + data.poster_path : '/images/default.jpg'} alt="" />



                <div className="px-5 py-3 relative">
                    <div className=" w-14 h-14 absolute -top-7 bg-white dark:bg-gray-700 rounded-full p-1">
                        <CircularProgressbar styles={buildStyles(getRadialStyle(getPercent(data.vote_average)))} value={getPercent(data.vote_average)} text={`${getPercent(data.vote_average)}%`} />

                    </div>
                    <h5 className=" mt-5 mb-1 text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                    <p className="mb-1 text-sm md:text-base font-normal text-gray-500  flex items-center dark:text-muted"><MdOutlineDateRange className='me-1' />{data.release_date}</p>
                    {/* <p className='mb-2 hidden md:block dark:text-slate-200'>{data.overview.slice(0, 100)}...</p>
                    <p className='mb-2 text-xs md:hidden dark:text-slate-200'>{data.overview.slice(0, 50)}...</p> */}

                </div>

            </div>
        </Link>
    )
}

export default MovieCard
