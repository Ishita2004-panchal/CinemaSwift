import React, { useState } from 'react'
import Carousel from './Carousel';
import Header from './Header';
import Card from './Card';
import { Link, useNavigate } from 'react-router-dom';

// import { useAuth } from '../Authcontext';
import { useLocation } from 'react-router-dom';

function Umbaro() {
    const gujaratiMovies = [
        { title: "Umbarro", genre: "Comedy / Drama / Family", image: "umbarro.jpeg", href: "/Umbaro" },
        { title: "Faati Ne?", genre: "Comedy / Horror", image: "faatine.jpg", href: "/Fatine" },
        { title: "Kaashi Raaghav", genre: "Drama", image: "kaashi.jpeg", href: "/Kaashi" },
        { title: "All The Best Pandya", genre: "Drama / Family", image: "allpandya.jpeg", href: "/Momtane" },
    ];
    const castData = [
        { name: "vandana Pathak", image: "vandana.jpeg", role: " Seema Patel" },
        { name: "Kajal Oza", image: "kajal.jpeg", role: " Chhaya Joshi" },
        { name: "Suchita Trivedi", image: "suchita.jpeg", role: " Vashudha " },
        { name: "Deeksha Joshi", image: "deeksha.jpeg", role: "Anvesha Sudhir" },
        { name: "Tarjanee Bhadla", image: "tarjanee.jpeg", role: "Avani Brahmbhatt" },
        { name: "Tejal Panchasara", image: "tejal.jpeg", role: "Saritaba Solanki" },
        { name: "vineeta M Joshee", image: "Vineeta.jpeg", role: "Smruti Shah" },
        { name: "Aarjav Trivedi", image: "aarjav.jpeg", role: "Kriti" },
        { name: "Sanjay Galsar", image: "sanjay.jpeg", role: "Kiran" },

    ];
    const crewData = [
        { name: "Abhishek Shah", image: "Abhishek.jpeg", role: " Director, Screenplay" },
        { name: "Sanjay Chhabaria", image: "sanjayp.jpeg", role: " Producer" },
        { name: "Falguni Patel", image: "falguni.jpeg", role: " Producer" },
        { name: "Hemant Dhome", image: "hemant.jpeg", role: "Writer" },
        { name: "Mehul Surti", image: "mehul.jpeg", role: "Musician , background Score" },
        { name: "Keyu Shah", image: "keyu.jpeg", role: "Screenplay , Dialogue Writer" },
        { name: "Apurva Motiwale", image: "apurva.jpeg", role: "Editor" },

    ];
    const navigate = useNavigate();

    const handleBookingClick = () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') == "true";
        if (isLoggedIn) {
            navigate('/theater/1');
        }
        else {
            navigate('/login', { state: { from: '/theater/1' } });
        }
    }


    return (
        <div className="main bg-light ">
            <Header />
            <div className="banneru bg-dark position-relative">
                <img src="umbarrobg.jpeg" className="cover w-100" alt="..." />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="details ">
                                <img src="umbarro.jpeg" className="overlay-image" alt="..." />
                            </div>
                        </div>
                        <div className='col-md-4 '>
                            <h2 className="text-white">Umbarro</h2>
                            <button type="button" className="btn btn-light btnimg1 ">2D</button>
                            <button type="button" className="btn btn-light btnimg2">Gujarati</button>
                            <p> 2h 17m • Comedy,Drama,Family • UA13+•24 Jan, 2025</p>
                            {/* <Link> */}
                            <button type="button" className="btn btn-danger btnbook" onClick={handleBookingClick}>Book Tickets</button>
                            {/* </Link> */}
                        </div>
                        <div className='col-md-4'></div>
                    </div>
                </div>
                {/* <i class="fa fa-arrow-circle-left" aria-hidden="true"></i> */}
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <div className="info">
                            <h4 className="mt-4">About the movie</h4>
                            <p className="">Seven women who`ve never set foot outside their hometowns decide to embark on their first-ever foreign trip - to London! From culture clashes to currency conversions, from language barriers to societal stigmas - they are on an epic trip to break them all and claim their space in the world.</p>
                            <p className="">The biggest gathering of female Gujarati film stars ever; Umbarro, promises to take audiences of all ages on a cinematic vacation!</p>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
            {/* <div className="greyline w-100"></div> */}
            <hr></hr>
            <div className='row'>
                {/* <div className='col-md-2'></div> */}
                <div className='col-md-12 col-12 '>
                    <Carousel title="Cast" category={castData} id={"castData"} />
                </div>
                {/* <div className="greyline w-100"></div> */}

                {/* <div className='col-md-2'></div> */}
            </div>
            {/* <hr></hr> */}
            {/* <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8'> */}
            <Carousel title="Crew" crew={crewData} id={"crewData"} />
            {/* </div>

                <div className='col-md-2'></div>
            </div> */}
            <hr></hr>
            {/* <div className="greyline w-100"></div> */}
            {/* <Carousel title1="Crew" crewData={crew} /> */}

            <div className='container'>
                <div className='row'>
                    <h4 className="m-2 liketext">You might also like</h4>
                    <div className="like">
                        <Card movies={gujaratiMovies} />
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Umbaro