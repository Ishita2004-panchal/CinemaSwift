import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './Card';
import TrendingSearch from './TrendingSearch';
import RecommendedCarousel from './RecommendedCarousel';
import Header from './Header';
import Carousel from './Carousel';
// import Footer from './Footer';
function Home() {

    const recommendedmovies = [
        { name: "Deva", type: "Action / Thriller", image: "deva2.jpeg" },
        { name: "Sky Force", type: "Action / Historical / Thriller", image: "sky2.jpeg" },
        { name: "Umbarro", type: "Comedy / Drama / Family", image: "umbarro.jpeg", href: "/Umbaro" },
        { name: "Faati ne", type: "Comedy / Horror", image: "faatine.jpg", href: "/Fatine" },
        { name: "Pushpa2 : The Rule", type: "Action / Thriller", image: "pushpa2.jpeg" },
        { name: "Mufasa", type: "Adventure / Adventure / Drama", image: "mufasa.jpeg" },
        { name: "Marco", type: "Action / Thriller", image: "morco.jpeg" },
        { name: "Emergency", type: "Drama / Historical", image: "emergency.jpg" },

    ]
    const southMovies = [
        { title: "Pushpa 2 : The Rule", genre: "Action / Thriller", image: "pushpa2.jpeg" },
        { title: "Marco", genre: "Action / Thriller", image: "morco.jpeg" },
        { title: "Thandel", genre: "Action / Drama / Romantic", image: "thandel.jpeg" },
        { title: "Vidaamayurchi", genre: "Action / Mystery / Thriller", image: "vida.jpeg" },
    ];

    // Gujarati Movies Data
    const gujaratiMovies = [
        { title: "Umbarro", genre: "Comedy / Drama / Family", image: "umbarro.jpeg", href: "/Umbaro" },
        { title: "Faati Ne?", genre: "Comedy / Horror", image: "faatine.jpg", href: "/Fatine" },
        { title: "Kaashi Raaghav", genre: "Drama", image: "kaashi.jpeg", href: "/Kaashi" },
        { title: "All The Best Pandya", genre: "Drama / Family", image: "allpandya.jpeg", href: "/Momtane" },
    ];
    const bollywoodMovies = [
        { title: "Deva", genre: "Action / Thriller", image: "deva2.jpeg" },
        { title: "Sky Force", genre: "Action / Historical / Thriler", image: "sky2.jpeg" },
        { title: "Emergency", image: "emergency.jpg", genre: "Drama / Historical" },
        { title: "Marco", image: "morco.jpeg", genre: "Action / Thriller" },
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
            <Header />
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active banner-img">
                        <img src="slide1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item banner-img">
                        <img src="slid2.jpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item banner-img">
                        <img src="slide3.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <RecommendedCarousel title="Recommended Movies" movies={recommendedmovies} />

            <div className='bg'>
                <img src="moviebg2.jfif" className="img-fluid bg mt-5 " alt="..." />
                <h1>Endless Entertainment Anytime. Anywhere!</h1>
            </div>
            <Card title="Bollywood Movies" movies={bollywoodMovies} />
            <Card title="Gujarati Movies" movies={gujaratiMovies} />
            <Card title="South Movies" movies={southMovies} />
            <TrendingSearch name="Trending search" buttons={buttons} />
            {/* <Footer /> */}

            <div className="quote">
                <img src="banner.jpg" className=" bg mt-5 " alt="..." />
                <h1>Lights, Camera, Ticket!</h1>
            </div>
        </div >
    );
}

export default Home;