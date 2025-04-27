import React, { useState } from 'react'
import Carousel from './Carousel';
import Card from './Card';
import { Link } from 'react-router-dom';

function Momtane() {
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
        { name: "Faisal Hashmi", image: "abhishek.jpeg", role: " Director, Screenplay" },
        { name: "Shaishav Prajapati", image: "sanjayp.jpeg", role: " Producer" },
        { name: "Prakash Sawant", image: "falguni.jpeg", role: " Producer" },
        { name: "Hardik Gohel", image: "hemant.jpeg", role: "Writer" },
        { name: "Pratik Desai", image: "mehul.jpeg", role: "Musician " },
        { name: "Hemil Shah", image: "keyu.jpeg", role: "Screenplay ,  Writer" },
        { name: "Fenil Dave", image: "apurva.jpeg", role: "Editor" },

    ];

    return (
        <div className="main bg-light ">
            <div className="banneru bg-dark position-relative">
                <img src="allpandyab.jpeg" className="cover w-100" alt="..." />

                <div className="details ">
                    <img src="allpandya.jpeg" className="overlay-image" alt="..." />
                </div>

                <h2 className="text-white">All The Best Pandya</h2>
                <button type="button" className="btn btn-light btnimg1 ">2D</button>
                <button type="button" className="btn btn-light btnimg2">Gujarati</button>
                <p> 2h 17m • Comedy,Drama,Family • UA13+•24 Jan, 2025</p>
                <Link to={`/theater/4`}>
                    <button type="button" className="btn btn-danger btnbook">Book Tickets</button>
                </Link>

                {/* <i class="fa fa-arrow-circle-left" aria-hidden="true"></i> */}
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <div className="info">
                            <h4 className="mt-4">About the movie</h4>
                            <p className="">A son must defend his father in court after a bribery accusation, forcing them to confront their strained relationship while fighting for justice in this legal drama.</p>
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

export default Momtane;