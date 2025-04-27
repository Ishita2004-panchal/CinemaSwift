import React, { useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';


function Billing() {
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const movies = [
        { id: "1", name: "Umbaro", theater: "Today, 27 Feb , 12:00 PM at Cinepolis, Nexus Ahmedabad" },
        { id: "2", name: "Faati ne", theater: "Today, 27 Feb , 12:00 PM at Cinepolis, Nexus Ahmedabad" },
        { id: "3", name: "Kaashi Raghav", theater: "Today, 27 Feb , 12:00 PM at Cinepolis, Nexus Ahmedabad" },
        { id: "4", name: "Mom Tane Nai Samjay", theater: "Today, 27 Feb, 12:00 PM at Cinepolis, Nexus Ahmedabad" },
    ]
    const movie = movies.find(m => m.id === movieId);

    const queryParams = new URLSearchParams(location.search);
    const totalAmount = queryParams.get('totalAmount');
    const selectedSeats = queryParams.get('selectedSeats');
    const seatLimit = queryParams.get('seats');

    const handleNavigate = () => {
        navigate(`/payment?movieId=${movieId}&seats=${seatLimit}&selectedSeats=${selectedSeats}&totalAmount=${totalAmount}`);

    };
    return (
        <div>
            <Header />
            <div className=' justify-content-center d-flex'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className="col-md-8 card w-100 mt-5" >
                        <ul className="nav mt-4 p-3 text-center justify-content-center">
                            <li className="nav-item">
                                <h5>{movie.name}</h5>
                                <p classNameName='mt-1'>{movie.theater}</p>
                            </li>
                        </ul>
                        <h4 className='text-center text-danger mt-4'>Booking Summary</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between">
                                <p>seats : {selectedSeats}</p>
                                <p>Rs. {totalAmount}</p>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <h6>Sub Total:</h6>
                                <h6>Rs. {totalAmount}</h6>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-info m-2">
                                <h5>Amount Payable</h5>
                                <h5>Rs. {totalAmount}</h5>
                            </li>
                        </ul>
                        <div className="form-check d-flex justify-content-center mt-3">
                            <label className="form-check-label btn btn-outline-danger" htmlFor="defaultCheck1">
                                <input className="form-check-input mx-2" type="checkbox" value="" id="defaultCheck1" />
                                M-Ticket
                            </label>
                        </div>
                        <button className="card-footer bg-danger text-light d-flex justify-content-between mt-3" onClick={handleNavigate}>
                            <h5>Total: Rs.{totalAmount}</h5>
                            <h5>Proceed</h5>
                        </button>
                        {/* <div className='d-flex justify-content-center mt-3'>

                            <label htmlFor='mTicket' className='btn btn-outline-danger'>
                                <input type='checkbox' id="mTicket" className='bg-danger' />
                                M-Ticket</label>
                        </div> */}
                    </div>
                    <div className='col-md-2'></div>
                </div>

            </div>

        </div>
    )
}

export default Billing