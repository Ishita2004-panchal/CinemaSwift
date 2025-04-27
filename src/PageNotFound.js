import React from 'react'
import { Link } from 'react-router-dom'
// import home from './Home';

function PageNotFound() {
    return (
        <div className=' errorpg d-flex align-items-center justify-content-center' >
            <div className='errorbx text-center shadow'>
                <div className="text-center">
                    <h1 className='p-1 text-danger text-center '>404</h1>
                    <h3>Oops! You're lost</h3>
                </div>
                <div className='text-center'>
                    <p>The page you are looking for was not found.</p>
                </div>
                <div className='homebtn d-flex justify-content-center align-items-center'>
                    <Link to="/">
                        <button className='btn btn-danger'>
                            Go to HomePage
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound