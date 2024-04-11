import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div className="flex min-h-screen flex-col items-center mx-auto bg-slate-100 dark:bg-gray-900">
                <img src='public/images/notFound.png' className=' max-w-xs' alt="notFound" />
                <p className="text-center dark:text-slate-100 px-5 md:max-w-max text-xs md:text-base">
                    The page you are trying to access doesn't exist or has been moved.<br className="hidden md:block" />
                    Try going back to our homepage.
                </p>
                <Link to={'/'} className="bg-primary text-white rounded mt-5 hover:bg-primaryHover duration-150 px-4 py-2">Go to homepage</Link>

            </div>

        </div>
    )
}

export default NotFound
