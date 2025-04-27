import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, movies }) {
    // Define the movie data


    return (
        <div className="container">
            <h2 className="mt-5">{title}</h2>
            <div id="carousel4indicator" className="carousel slide">
                <div className="cards fs-6">
                    <div className="carousel-inner">
                        <div className="carousel-item active movies">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className='col-md-1'></div>
                                    <div className='col-md-10 d-flex'>
                                        {movies.map((movie, index) => (
                                            <div className="col" key={index}>
                                                <div className="card bg-transparent mx-3 mt-4">
                                                    <div className="position-relative">
                                                        <Link to={movie.href}><img
                                                            src={movie.image}
                                                            className="card-img-top "
                                                            alt={movie.title}
                                                        /></Link>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{movie.title}</h5>
                                                            <p className="card-text">{movie.genre}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='col-md-1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
