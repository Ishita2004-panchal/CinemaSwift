// import React, { useState } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// // import { Link } from 'react-router-dom';


// function Theaters() {
//     const { id } = useParams();
//     const navigate = useNavigate(); // Retrieve the 'id' parameter from the URL

//     // Example data
//     const moviesData = [
//         { id: '1', movie: "Umbarro", cinema: "Cinepolis: Nexus Ahmedabad One", time: "2:00 PM" },
//         { id: '2', movie: "Faati Ne?", cinema: "Cinepolis: Kankubag , Vastral , Ahmedabad", time: "4:30 PM" },
//         { id: '3', movie: "Kaashi Raaghav", cinema: "Apple Cinema: Bapunager", time: "6:00 PM" },
//         { id: '4', movie: "Mom Tane Nai Samjay", cinema: "City Pulse: Orient Miniplex, Ellisbridge", time: "8:00 PM" },
//     ];
//     const [seats, setSeats] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     const [selectedSeat, setSelectedSeats] = useState([]);
//     const person = [
//         { person: "per person", price: "Rs. 250", available: "Available" },
//         { person: "per person", price: "Rs. 150", available: "Available" },
//         { person: "per person", price: "Rs. 110", available: "Available" },
//     ]
//     const [seatLimit, setSeatLimit] = useState([0]);

//     const handleSeatLimitClick = (seat) => {
//         setSelectedSeats((prevSeats) => { })
//         if (prevSeats.includes(seat)) {
//             return prevSeats.filter(s => s !== seat);
//         }
//         else {
//             return [...prevSeats, seat];
//         }
//     };

//     // const handleSeatClick = (seat) => {
//     //     if (selectedSeat.length >= seatLimit && !selectedSeat.includes(seat)) {
//     //         alert(`you can select up to ${seatLimit} seats only.`);
//     //         return;
//     //     }
//     //     const newSelectedSeat = selectedSeat.includes(seat)
//     //         ? selectedSeat.filter((s) => s !== seat)
//     //         : [...selectedSeat, seats];

//     //     selectedSeat(newSelectedSeat);
//     // };
//     const handleConfirmSelection = () => {
//         if (seatLimit === 0) {
//             alert("please select the number of seats first!");
//             return;
//         }
//         navigate(`/seatPage/${id}?seats=${seatLimit}`);
//     };
//     // Find the movie data using the `id` from URL
//     const movieData = moviesData.find(item => item.id === id);
//     // If movie data is not found, show a message
//     if (!movieData) {
//         return <div>No data available for this show</div>;
//     }

//     const { movie, cinema, time } = movieData;

//     return (
//         <div className="col-md-12">
//             <div className="main">
//                 <div className="header bg-light">
//                     <div className="title">
//                         <div className="greyline w-100"></div>
//                         <h1 className="text-dark py-3 text">{movie}</h1>
//                         <div className="m-2">
//                             <button type="button" className="btn btn-light btn-outline-secondary m-1">Drama</button>
//                             <button type="button" className="btn btn-light btn-outline-secondary m-1">Family</button>
//                         </div>
//                         <div className="greyline w-100 mt-4"></div>
//                     </div>
//                     <div className="subtitle mt-3">
//                         <div className="subclass d-flex justify-content-between align-item-center flex-wrap">
//                             <div className="Date">
//                                 <button type="button" className="btn btn-light m-1 btn-sm btn-outline-danger month">feb</button>
//                                 <button type="button" className="btn btn-light m-1 btn-sm btn-outline-danger"> Thu 13</button>
//                                 <button type="button" className="btn btn-light m-1 btn-sm btn-outline-danger">Fri 14</button>
//                                 <button type="button" className="btn btn-light m-1 btn-sm btn-outline-danger">Sat 15</button>
//                             </div>
//                             <div className="dropdownsec d-flex">
//                                 <h5 className="d-flex align-items-center">Filter By</h5>
//                                 <div className="price m-1">
//                                     <button className="btn btn-light dropdown-toggle btn-outline-danger" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         Price
//                                     </button>
//                                     <ul className="dropdown-menu">
//                                         <li>
//                                             <input className="m-2" type="checkbox" id="lowest" value="100-200" />
//                                             <label htmlFor="lowest"> 100-200</label>
//                                         </li>
//                                         <li>
//                                             <input className="m-2" type="checkbox" id="lowest" value="200-300" />
//                                             <label htmlFor="lowest"> 200-300</label>
//                                         </li>
//                                         <li>
//                                             <input className="m-2" type="checkbox" id="lowest" value="300-400" />
//                                             <label htmlFor="lowest"> 300-400</label>
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <div className="Format m-1">
//                                     <button className="btn btn-light dropdown-toggle btn-outline-danger" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         Format
//                                     </button>
//                                     <ul className="dropdown-menu">
//                                         <li>
//                                             <input className="m-2" type="checkbox" id="lowest" value="2D" />
//                                             <label htmlFor="lowest">2D</label>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="greyline w-100 mt-4"></div>
//                     </div>
//                 </div>
//                 <div className="p-2">
//                     <div className='row'>
//                         <div className='col-md-2'></div>
//                         <div className='col-md-8 theater bg-light '>
//                             <div>
//                                 <h3 className="p-2">{cinema}</h3>
//                                 <div className="row">
//                                     <div className="col-md-6 d-flex align-item-center">
//                                         <div className="features">
//                                             <button type="button" className="rounded-pill text-bg-light btn-outline-danger btn-sm m-1">Direction</button>
//                                             <button type="button" className="rounded-pill text-bg-light btn-outline-danger btn-sm">Information</button>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6 text-end">
//                                         {/* <a href="Seats"><button type="button" className="btn btn-light btn-outline-danger btn-lg">{time}</button></a> */}
//                                         <button type="button" className="btn btn-danger w-150 py-8" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//                                             {time}
//                                         </button>
//                                         <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                                             <div className=" modal-dialog modal-dialog-centered">
//                                                 <div className="modal-content">
//                                                     <div className="modal-header">
//                                                         <h4 className="modal-title fs-5" id="staticBackdropLabel">How many seats?</h4>
//                                                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                                     </div>
//                                                     <div className="modal-body text-center">
//                                                         <div className='d-flex justify-content-center'>
//                                                             <img src='/ticket.png' alt='img is loading' />
//                                                         </div>
//                                                         <div className='d-flex justify-content-center '>
//                                                             {[...Array(10).keys()].map(i => (
//                                                                 <div className='mx-2 mt-3' key={i}>
//                                                                     <button className='seats' onClick={(event) => handleSeatLimitClick(i + 1, event)}>{i + 1}</button>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     </div>

//                                                     <div className='justify-content-center d-flex'>
//                                                         {person.map((persons, index) => (
//                                                             <div key={index} className='mx-3 text-center mt-3'>
//                                                                 <h6 className='text-secondary'>{persons.person}</h6>
//                                                                 <h6>{persons.price}</h6>
//                                                                 <h6 className='text-success'>{persons.available}</h6>
//                                                             </div >
//                                                         ))}
//                                                     </div>
//                                                     <div className="modal-footer  justify-content-center">
//                                                         <button type="button" className="btn btn-danger w-75" onClick={handleConfirmSelection}>Select Seat</button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* <Link to={`/ seatpage / ${ id } `} className='btn btn-danger w-150 py-8'>
//                                             {time}
//                                         </Link> */}
//                                         {/* <!-- Vertically centered scrollable modal --> */}

//                                     </div>
//                                 </div>
//                                 <p m-3>Food, Beverages & parking</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='col-md-2'></div>
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default Theaters;

import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { TheaterData } from './Api';
import { ShowTimeData } from './Api';
function Theaters() {
    const [MoviesData, setMoviesData] = useState([]);


    const [theater, setTheater] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            const data = await TheaterData();
            if (data) setTheater(data);
            console.log(data);
        };

        loadMovies();
    }, []);

    const [Time, setTime] = useState([]);
    useEffect(() => {
        const loadTimes = async () => {
            const data = await ShowTimeData();
            if (data) setTime(data);
            console.log(data);
        };

        loadTimes();
    }, []);

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    // Example data
    const moviesData = [
        { id: '1', movie: "Umbarro", cinema: "Cinepolis: Nexus Ahmedabad One", time: "2:00 PM" },
        { id: '2', movie: "Faati Ne?", cinema: "Cinepolis: Kankubag , Vastral , Ahmedabad", time: "4:30 PM" },
        { id: '3', movie: "Kaashi Raaghav", cinema: "Apple Cinema: Bapunager", time: "6:00 PM" },
        { id: '4', movie: "Mom Tane Nai Samjay", cinema: "City Pulse: Orient Miniplex, Ellisbridge", time: "8:00 PM" },
    ];

    const [seats, setSeats] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const person = [
        { person: "per person", price: "Rs. 250", available: "Available" },
        { person: "per person", price: "Rs. 150", available: "Available" },
        { person: "per person", price: "Rs. 110", available: "Available" },
    ];



    const [seatLimit, setSeatLimit] = useState(0);

    const handleSeatLimitClick = (seat) => {
        setSeatLimit(seat); // Update seatLimit with the selected number of seats
        setSelectedSeats((prevSeats) => {
            if (prevSeats.includes(seat)) {
                return prevSeats.filter(s => s !== seat);
            } else {
                return [...prevSeats, seat];
            }
        });
    };

    const handleConfirmSelection = () => {
        if (seatLimit === 0) {
            alert("Please select the number of seats first!");
            return;
        }
        navigate(`/seatPage/${id}?seats=${seatLimit}`);
    };

    // Find the movie data using the `id` from URL
    const movieData = moviesData.find(item => item.id === id);
    if (!movieData) {
        return <div>No data available for this show</div>;
    }

    const { movie, cinema, time } = movieData;

    return (
        <div className="col-md-12">
            <Header />
            <div className="main">
                <div className="header bg-light">
                    <div className="title">
                        <div className="greyline w-100"></div>
                        <h1 className="text-dark py-3 text">{movie}</h1>
                        <div className="m-2">
                            <button type="button" className="btn btn-light btn-outline-secondary m-1">Drama</button>
                            <button type="button" className="btn btn-light btn-outline-secondary m-1">Family</button>
                        </div>
                        <div className="greyline w-100 mt-4"></div>
                    </div>
                    <div className="subtitle mt-3">
                        <div className="subclass d-flex justify-content-between align-item-center flex-wrap">
                            <div className="Date">
                                <button type="button" className="btn btn-light m-1 btn-sm btn-outline-danger month">feb</button>
                                <button type="button" className="btn btn-light m-1 btn-sm btn-outline-danger"> Thu 13</button>
                                <button type="button" className="btn btn-light m-1 btn-sm btn-outline-danger">Fri 14</button>
                                <button type="button" className="btn btn-light m-1 btn-sm btn-outline-danger">Sat 15</button>
                            </div>
                            <div className="dropdownsec d-flex">
                                <h5 className="d-flex align-items-center">Filter By</h5>
                                <div className="price m-1">
                                    <button className="btn btn-light dropdown-toggle btn-outline-danger" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Price
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <input className="m-2" type="checkbox" id="lowest" value="100-200" />
                                            <label htmlFor="lowest"> 100-200</label>
                                        </li>
                                        <li>
                                            <input className="m-2" type="checkbox" id="lowest" value="200-300" />
                                            <label htmlFor="lowest"> 200-300</label>
                                        </li>
                                        <li>
                                            <input className="m-2" type="checkbox" id="lowest" value="300-400" />
                                            <label htmlFor="lowest"> 300-400</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="Format m-1">
                                    <button className="btn btn-light dropdown-toggle btn-outline-danger" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Format
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <input className="m-2" type="checkbox" id="lowest" value="2D" />
                                            <label htmlFor="lowest">2D</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="greyline w-100 mt-4"></div>
                    </div>
                </div>
                <div className="p-2">
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-8 theater '>
                            {theater.map((item, index) => (
                                <div key={item.id || index} className='bg-light theaterbox'>
                                    <h3 h3 className="p-2" > {item.name}</h3>
                                    <div className="row m-1 ">
                                        <div className=" d-flex align-item-center">
                                            <div className="features">
                                                {/* <button type="button" className="rounded-pill text-bg-light btn-outline-danger btn-sm m-1">{item.location}</button> */}
                                                <button type="button" className="rounded-pill text-bg-light btn-outline-danger btn-sm m-1">Direction</button>

                                                {/* <button type="button" className="rounded-pill text-bg-light btn-outline-danger btn-sm">Information</button> */}
                                            </div>
                                        </div>

                                        <div className=" text-end">
                                            {Time.map((item, index) => (
                                                <button type="button" className="btn btn-danger showbtn" data-bs-toggle="modal" data-bs-target={`#modal-${index}`} key={item.id || index}>
                                                    {item.showTime}
                                                </button>
                                            ))}


                                            {/* Modal */}
                                            <div className="modal fade" id={`modal-${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h4 className="modal-title fs-5" id="modalLabel">How many seats?</h4>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body text-center">
                                                            <div className='d-flex justify-content-center ticket'>
                                                                <img src='/ticket3.jpeg' alt='img is loading' />
                                                            </div>
                                                            <div className='d-flex justify-content-center'>
                                                                {[...Array(10).keys()].map(i => (
                                                                    <div className='mx-2 mt-3' key={i}>
                                                                        <button className={`seats ${selectedSeats.includes(i + 1) ? 'selected' : ''}`} onClick={() => handleSeatLimitClick(i + 1)}>{i + 1}</button>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className='justify-content-center d-flex'>
                                                            {person.map((persons, index) => (
                                                                <div key={index} className='mx-3 text-center mt-3'>
                                                                    <h6 className='text-secondary'>{persons.person}</h6>
                                                                    <h6>{persons.price}</h6>
                                                                    <h6 className='text-success'>{persons.available}</h6>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="modal-footer justify-content-center">
                                                            <button type="button" className="btn btn-danger w-75" onClick={handleConfirmSelection} data-bs-dismiss="modal">Select Seat</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Modal */}
                                        </div>
                                    </div>
                                    <p className="m-3">{item.facilities}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </div >
    );
}

export default Theaters;




// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';

// function Theaters() {
//     const [MoviesData, setMoviesData] = useState([]);

//     useEffect(() => {

//         fetch("http://192.168.1.25:8081/api/theaters")

//             .then((res) => {

//                 if (!res.ok) throw new Error("Network response was not ok");

//                 return res.json();

//             })

//             .then((data) => {

//                 console.log("Fetched Movies:", data); // Show data in console

//                 setMoviesData(data); // Save it to state if needed later

//             })

//             .catch((error) => {

//                 console.error("Fetch error:", error);

//             });

//     }, []);




//     const { id } = useParams();
//     const navigate = useNavigate();
//     const location = useLocation();

//     // Example data
//     const moviesData = [
//         { id: '1', movie: "Umbarro", cinema: "Cinepolis: Nexus Ahmedabad One", time: "2:00 PM" },
//         { id: '2', movie: "Faati Ne?", cinema: "Cinepolis: Kankubag , Vastral , Ahmedabad", time: "4:30 PM" },
//         { id: '3', movie: "Kaashi Raaghav", cinema: "Apple Cinema: Bapunager", time: "6:00 PM" },
//         { id: '4', movie: "Mom Tane Nai Samjay", cinema: "City Pulse: Orient Miniplex, Ellisbridge", time: "8:00 PM" },
//     ];

//     const [seats, setSeats] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     const [selectedSeats, setSelectedSeats] = useState([]);
//     const person = [
//         { person: "per person", price: "Rs. 250", available: "Available" },
//         { person: "per person", price: "Rs. 150", available: "Available" },
//         { person: "per person", price: "Rs. 110", available: "Available" },
//     ];



//     const [seatLimit, setSeatLimit] = useState(0);

//     const handleSeatLimitClick = (seat) => {
//         setSeatLimit(seat); // Update seatLimit with the selected number of seats
//         setSelectedSeats((prevSeats) => {
//             if (prevSeats.includes(seat)) {
//                 return prevSeats.filter(s => s !== seat);
//             } else {
//                 return [...prevSeats, seat];
//             }
//         });
//     };

//     const handleConfirmSelection = () => {
//         if (seatLimit === 0) {
//             alert("Please select the number of seats first!");
//             return;
//         }
//         navigate(`/seatPage/${id}?seats=${seatLimit}`);
//     };

//     // Find the movie data using the `id` from URL
//     const movieData = moviesData.find(item => item.id === id);
//     if (!movieData) {
//         return <div>No data available for this show</div>;
//     }

//     const { movie, cinema, time } = movieData;

//     return (
//         <div className="col-md-12">
//             <Header />
//             <div className="main">
//                 <div className="header bg-light">
//                     <div className="title">
//                         <div className="greyline w-100"></div>
//                         <h1 className="text-dark py-3 text">{movie}</h1>
//                         <div className="m-2">
//                             <button type="button" className="btn btn-light btn-outline-secondary m-1">Drama</button>
//                             <button type="button" className="btn btn-light btn-outline-secondary m-1">Family</button>
//                         </div>
//                         <div className="greyline w-100 mt-4"></div>
//                     </div>
//                     <div className="subtitle mt-3">
//                         <div className="subclass d-flex justify-content-between align-item-center flex-wrap">
//                             <div className="Date">
//                                 <button type="button" className="btn btn-light m-1 btn-sm btn-outline-danger month">feb</button>
//                                 <button type="button" className="btn btn-light m-1 btn-sm btn-outline-danger"> Thu 13</button>
//                                 <button type="button" className="btn btn-light m-1 btn-sm btn-outline-danger">Fri 14</button>
//                                 <button type="button" className="btn btn-light m-1 btn-sm btn-outline-danger">Sat 15</button>
//                             </div>
//                             <div className="dropdownsec d-flex">
//                                 <h5 className="d-flex align-items-center">Filter By</h5>
//                                 <div className="price m-1">
//                                     <button className="btn btn-light dropdown-toggle btn-outline-danger" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         Price
//                                     </button>
//                                     <ul className="dropdown-menu">
//                                         <li>
//                                             <input className="m-2" type="checkbox" id="lowest" value="100-200" />
//                                             <label htmlFor="lowest"> 100-200</label>
//                                         </li>
//                                         <li>
//                                             <input className="m-2" type="checkbox" id="lowest" value="200-300" />
//                                             <label htmlFor="lowest"> 200-300</label>
//                                         </li>
//                                         <li>
//                                             <input className="m-2" type="checkbox" id="lowest" value="300-400" />
//                                             <label htmlFor="lowest"> 300-400</label>
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <div className="Format m-1">
//                                     <button className="btn btn-light dropdown-toggle btn-outline-danger" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         Format
//                                     </button>
//                                     <ul className="dropdown-menu">
//                                         <li>
//                                             <input className="m-2" type="checkbox" id="lowest" value="2D" />
//                                             <label htmlFor="lowest">2D</label>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="greyline w-100 mt-4"></div>
//                     </div>
//                 </div>
//                 <div className="p-2">
//                     <div className='row'>
//                         <div className='col-md-2'></div>
//                         <div className='col-md-8 theater bg-light'>
//                             <div>
//                                 <h3 className="p-2">{cinema}</h3>
//                                 <div className="row">
//                                     <div className="col-md-6 d-flex align-item-center">
//                                         <div className="features">
//                                             <button type="button" className="rounded-pill text-bg-light btn-outline-danger btn-sm m-1">Direction</button>
//                                             <button type="button" className="rounded-pill text-bg-light btn-outline-danger btn-sm">Information</button>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6 text-end">
//                                         <button type="button" className="btn btn-danger w-150 py-8" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//                                             {time}
//                                         </button>
//                                         <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                                             <div className=" modal-dialog modal-dialog-centered">
//                                                 <div className="modal-content">
//                                                     <div className="modal-header">
//                                                         <h4 className="modal-title fs-5" id="staticBackdropLabel">How many seats?</h4>
//                                                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                                     </div>
//                                                     <div className="modal-body text-center">
//                                                         <div className='d-flex justify-content-center ticket'>
//                                                             <img src='/ticket3.jpeg' alt='img is loading' />
//                                                         </div>
//                                                         <div className='d-flex justify-content-center '>
//                                                             {[...Array(10).keys()].map(i => (
//                                                                 <div className='mx-2 mt-3' key={i}>
//                                                                     <button className={`seats ${selectedSeats.includes(i + 1) ? 'selected' : ''}`} onClick={() => handleSeatLimitClick(i + 1)}>{i + 1}</button>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     </div>

//                                                     <div className='justify-content-center d-flex'>
//                                                         {person.map((persons, index) => (
//                                                             <div key={index} className='mx-3 text-center mt-3'>
//                                                                 <h6 className='text-secondary'>{persons.person}</h6>
//                                                                 <h6>{persons.price}</h6>
//                                                                 <h6 className='text-success'>{persons.available}</h6>
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                     <div className="modal-footer  justify-content-center">
//                                                         <button type="button" className="btn btn-danger w-75" onClick={handleConfirmSelection} data-bs-dismiss="modal">Select Seat</button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <p m-3>Food, Beverages & parking</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='col-md-2'></div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Theaters;
