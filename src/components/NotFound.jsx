import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div class="flex flex-col justify-center items-center mx-auto">
                <img src='public/images/notFound.png' width="400" alt="notFound" />
                <p class="text-center dark:text-slate-100">
                    The page you are trying to access doesn't exist or has been moved.<br class="d-none d-md-block" />
                    Try going back to our homepage.
                </p>
                <Link to={'/'} class="bg-blue-600 text-white rounded mt-5 hover:bg-blue-600_hover duration-150 px-3 py-2">Go to homepage</Link>

            </div>

        </div>
    )
}

export default NotFound
