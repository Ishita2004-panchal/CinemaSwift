import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';

function SeatPage() {
    const { movieId } = useParams();
    const location = useLocation();
    const [seatsLimit, setSeatsLimit] = useState(1); // Default to 1 seat
    const [selectedSeats, setSelectedSeats] = useState([]);
    const navigate = useNavigate();

    const handleNavigation = () => {

        const modalElement = document.getElementById('staticBackdrop');
        const modal = window.bootstrap.Modal.getInstance(modalElement); // Get the active modal instance
        if (modal) {
            modal.hide(); // Hide the modal before navigation   
        }

        const totalAmount = calculateTotalAmount();
        const selectedSeatsString = selectedSeats.join(',');
        navigate(`/billing/${movieId}?seats=${seatsLimit}&totalAmount=${totalAmount}&selectedSeats=${selectedSeatsString} `);
    };

    const rows = [
        { label: 'A', seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
        { label: 'B', seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
        { label: 'C', seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
    ];

    const row2 = [
        { label: 'D', seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
        { label: 'E', seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
        { label: 'F', seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
        { label: 'G', seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
    ];

    const row3 = [
        { label: 'H', seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
        { label: 'I', seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
    ];

    const movies = [
        { id: "1", name: "Umbaro", theater: "Today, 27 Feb , 12:00 PM at Cinepolis, Nexus Ahmedabad" },
        { id: "2", name: "Faati ne", theater: "Today, 27 Feb , 12:00 PM at Cinepolis, Nexus Ahmedabad" },
        { id: "3", name: "Kaashi Raghav", theater: "Today, 27 Feb , 12:00 PM at Cinepolis, Nexus Ahmedabad" },
        { id: "4", name: "Mom Tane Nai Samjay", theater: "Today, 27 Feb, 12:00 PM at Cinepolis, Nexus Ahmedabad" },
    ]
    const rowPrices = {
        rows: 250,
        row2: 150,
        row3: 110,
    }
    const movie = movies.find(m => m.id === movieId);

    // Read the 'seats' query parameter from the URL
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const seatsFromUrl = queryParams.get('seats');
        if (seatsFromUrl) {
            setSeatsLimit(parseInt(seatsFromUrl, 10)); // Set the seat limit from URL
        }
    }, [location.search]);

    const handleSeatSelection = (rowLabel, seatNumber) => {
        const seatId = `${rowLabel}${seatNumber}`;

        // If the seat is already selected, deselect it
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
        } else {
            // If the limit is not reached, select the seat
            if (selectedSeats.length < seatsLimit) {
                setSelectedSeats([...selectedSeats, seatId]);
            } else {
                alert(`You can only select up to ${seatsLimit} seat(s).`);
            }
        }
    };

    const calculateTotalAmount = () => {
        let totalAmount = 0;

        selectedSeats.forEach(seatId => {
            const rowLabel = seatId.charAt(0);

            if (['A', 'B', "C"].includes(rowLabel)) {
                totalAmount += rowPrices.rows;
            }
            else if (['D', 'E', 'F', 'G'].includes(rowLabel)) {
                totalAmount += rowPrices.row2;
            }
            else if (['H', 'I'].includes(rowLabel)) {
                totalAmount += rowPrices.row3;
            }
        });
        return totalAmount;
    };
    return (
        <div>
            <Header />
            <div className="container mt-4 seatbg">
                <div className="row mainRow">
                    <div className="col-12 col-md-3 ">
                        <div className="day d-flex py-3">
                            <div>
                                <h4>Thu</h4>
                                <h5>27 Feb</h5>
                            </div>
                            <div>
                                <button type="button" className="btn btn-danger item-center m-3 mx-5 btn-lg">12:00 PM</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="movie py-3 text-center">
                            <h4>{movie.name}</h4>
                            <p>{movie.theater}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <div className="box mt-5 mx-2 bg-light border border-danger"></div>
                        <p className="mt-5">Available</p>
                        <div className="box mt-5 mx-2 bg-secondary"></div>
                        <p className="mt-5">Booked</p>
                        <div className="box mt-5 mx-2 bg-danger"></div>
                        <p className="mt-5">Selected</p>
                    </div>
                </div>

                <div className="container seatbg py-4">
                    <div className="text-center py-3">
                        <p>Rs. 250 platinum</p>
                    </div>

                    {/* First set of rows */}
                    {rows.map((row, rowIndex) => (
                        <div className="row justify-content-center" key={rowIndex}>
                            <div className="col-2 col-md-1 text-end mt-3">
                                <h5>{row.label}</h5>
                            </div>
                            <div className="col-10 col-md-8 d-flex flex-wrap justify-content-center">
                                {row.seats.map((seat, index) => {
                                    const seatId = `${row.label}${seat}`;
                                    return (
                                        <div
                                            key={index}
                                            className={`hover seat mx-2 my-2 text-center ${selectedSeats.includes(seatId) ? 'bg-danger' : ''}`}
                                            onClick={() => handleSeatSelection(row.label, seat)} // Select or deselect seat
                                        >
                                            <a href="#" className="num">
                                                {seat}
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {/* Second set of rows */}
                    <div className="container seatbg py-4 ">
                        <div className="text-center py-3">
                            <p>Rs. 150 platinum</p>
                        </div>
                        {row2.map((row, rowIndex) => (
                            <div className="row justify-content-center" key={rowIndex}>
                                <div className="col-2 col-md-1 text-end mt-3">
                                    <h5>{row.label}</h5>
                                </div>
                                <div className="col-10 col-md-8 d-flex flex-wrap justify-content-center">
                                    {row.seats.map((seat, index) => {
                                        const seatId = `${row.label}${seat}`;
                                        return (
                                            <div
                                                key={index}
                                                className={`hover seat mx-2 my-2 text-center ${selectedSeats.includes(seatId) ? 'bg-danger' : ''}`}
                                                onClick={() => handleSeatSelection(row.label, seat)} // Select or deselect seat
                                            >
                                                <a href="#" className="num">
                                                    {seat}
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Third set of rows */}
                    <div className="container seatbg">
                        <div className="text-center py-3">
                            <p>Rs. 110 platinum</p>
                        </div>
                        {row3.map((row, rowIndex) => (
                            <div className="row justify-content-center" key={rowIndex}>
                                <div className="col-2 col-md-1 text-end mt-3">
                                    <h5>{row.label}</h5>
                                </div>
                                <div className="col-10 col-md-8 d-flex flex-wrap justify-content-center">
                                    {row.seats.map((seat, index) => {
                                        const seatId = `${row.label}${seat}`;
                                        return (
                                            <div
                                                key={index}
                                                className={`hover seat mx-2 my-2 text-center ${selectedSeats.includes(seatId) ? 'bg-danger' : ''}`}
                                                onClick={() => handleSeatSelection(row.label, seat)} // Select or deselect seat
                                            >
                                                <a href="#" className="num">
                                                    {seat}
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}

                        <div className='text-center mt-4 fixed-bottom'>
                            <button className='btn btn-danger w-25' disabled={selectedSeats.length === 0} type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  >
                                Total Amount: Rs. {calculateTotalAmount()}
                            </button>

                        </div>

                        {/* <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" disabled={selectedSeats.length === 0} >
                            Total Amount: Rs. {calculateTotalAmount()}
                        </button> */}

                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header text-center">
                                        <h5 className="modal-title w-100 text-danger" id="staticBackdropLabel">Note</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className='text-dark'>
                                            <p>1. This cinema is now CASHLESS. Enjoy a fast, secure, and seamless experience.</p>
                                            <p>2. Seat layout page for  cinemas is for representational purposes only and actual seat layout might vary.</p>
                                            <p>3. Tickets are compulsory for children of 3 years & above.</p>
                                            <p>4. Patrons below the age of 18 years cannot be admitted for movies certified `A`.</p>
                                            <p>5. For 3D movies, ticket price includes charges towards usage of 3D glasses.</p>
                                            <p>6. Outside Food & Beverage are not allowed in the cinema premises.</p>
                                            <p>7. Items like carry-bags, eatables, helmets, handbags are not allowed inside the theatres and are strictly prohibited.</p>
                                            <p>8. Items like laptops, camera, knives, lighter, match box, cigarettes, firearms and all types of inflammable objects are strictly prohibited.</p>
                                            <p>9. Patrons under the influence of alcohol or any other form of drugs will not be allowed inside the cinema premises.</p>
                                            <p> 10. In case a ticket is lost or misplaced, a duplicate ticket cannot be issued.</p>
                                            <p>11. Tickets once purchased cannot be cancelled, exchanged or refunded.</p>
                                            <p>12. Decision taken by  cinema shall be final and binding, ``rights of reserved``.</p>
                                            <p>13. Pre-booked food & beverage needs to be collected from F&B counter.</p>
                                            <p>14. Ticket prices are subject to change without any prior notification.</p>
                                            <p> 15. Recording of a film through mobile or camera is strictly prohibited and is a punishable offence.</p>
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={handleNavigation}>Accpet</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeatPage;

