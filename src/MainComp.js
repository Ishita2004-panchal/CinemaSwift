import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './Card';
import TrendingSearch from './TrendingSearch';
import RecommendedCarousel from './RecommendedCarousel';
import Carousel from './Carousel';

function MainComp() {
    const recommendedmovies = [
        { name: "Deva", type: "Action / Thriller", image: "devac.jpeg" },
        { name: "Sky Force", type: "Action / Historical / Thriller", image: "skyc.jpeg" },
        { name: "Umbarro", type: "Comedy / Drama / Family", image: "umbroc.jpeg", href: "/Umbaro" },
        { name: "Faati ne", type: "Comedy / Horror", image: "fatic.jpeg", href: "/Fatine" },
        { name: "Pushpa2 : The Rule", type: "Action / Thriller", image: "pushpac.jpeg" },
        { name: "Mufasa", type: "Adventure / Adventure / Drama", image: "mufasac.jpeg" },
        { name: "Marco", type: "Action / Thriller", image: "marcoc.jpeg" },
        { name: "Emergency", type: "Drama / Historical", image: "emergencyc.jpeg" },

    ]
    const southMovies = [
        { title: "Pushpa 2 : The Rule", genre: "Action / Thriller", image: "pushpac.jpeg" },
        { title: "Marco", genre: "Action / Thriller", image: "marcoc.jpeg" },
        { title: "Thandel", genre: "Action / Drama / Romantic", image: "thaandel.jpeg" },
        { title: "Vidaamayurchi", genre: "Action / Mystery / Thriller", image: "vidaamuyarchi.jpeg" },
    ];

    // Gujarati Movies Data
    const gujaratiMovies = [
        { title: "Umbarro", genre: "Comedy / Drama / Family", image: "umbroc.jpeg", href: "/Umbaro" },
        { title: "Faati Ne?", genre: "Comedy / Horror", image: "fatic.jpeg", href: "/Fatine" },
        { title: "Kaashi Raaghav", genre: "Drama", image: "kaashi.jpeg", href: "/Kaashi" },
        { title: "Mom Tane Nai Samjay", genre: "Drama / Family", image: "momtane.jpeg", href: "/Momtane" },
    ];
    const bollywoodMovies = [
        { title: "Deva", genre: "Action / Thriller", image: "devac.jpeg" },
        { title: "Sky Force", genre: "Action / Historical / Thriler", image: "skyc.jpeg" },
        { title: "Emergency", image: "emergencyc.jpeg", genre: "Drama / Historical" },
        { title: "Marco", image: "marcoc.jpeg", genre: "Action / Thriller" },
    ];
    const buttons = [
        { name: "Sanam Teri Kasam", type: "Movies" },
        { name: "Interstellar", type: "Movies" },
        { name: "Deva", type: "Movies" },
        { name: "Pushpa2 : The Rule", type: "Movies" },
        { name: "Sky Force", type: "Movies" },
        { name: "Chhaava", type: "Movies" },
        { name: "Umbrro", type: "Movies" },
        { name: "Chaal Jeevi Laiye", type: "Movies" },
    ];
    return (
        <div className='main'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default MainComp