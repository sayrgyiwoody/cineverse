import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div className="flex min-h-screen flex-col justify-center items-center mx-auto bg-slate-100 dark:bg-gray-900">
                <img src='public/images/notFound.png' width="400" alt="notFound" />
                <p className="text-center dark:text-slate-100">
                    The page you are trying to access doesn't exist or has been moved.<br className="d-none d-md-block" />
                    Try going back to our homepage.
                </p>
                <Link to={'/'} className="bg-blue-600 text-white rounded mt-5 hover:bg-blue-600_hover duration-150 px-3 py-2">Go to homepage</Link>

            </div>

        </div>
    )
}

export default NotFound
