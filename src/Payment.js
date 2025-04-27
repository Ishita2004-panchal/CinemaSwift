import React, { useState, } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
// import PaymentSuccess from './PaymnetSuccess';

function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const totalAmount = queryParams.get('totalAmount');
    const selectedSeats = queryParams.get('selectedSeats');
    const movieId = queryParams.get('movieId');
    const seatLimit = queryParams.get('seats');

    const selectedSeatsArray = selectedSeats ? selectedSeats.split(",") : [];

    const [isAgreed, setIsAgreed] = useState(true);
    const [agreeError, setAgreeError] = useState("");
    const [Form, setForm] = useState({
        email: "",
        number: "",
        emailError: "",
        numberError: ""
    });
    const movies = [
        { id: "1", name: "Umbaro", theater: "Today, 27 Feb , 12:00 PM at Cinepolis, Nexus Ahmedabad" },
        { id: "2", name: "Faati ne", theater: "Today, 27 Feb , 12:00 PM at Cinepolis, Nexus Ahmedabad" },
        { id: "3", name: "Kaashi Raghav", theater: "Today, 27 Feb , 12:00 PM at Cinepolis, Nexus Ahmedabad" },
        { id: "4", name: "Mom Tane Nai Samjay", theater: "Today, 27 Feb, 12:00 PM at Cinepolis, Nexus Ahmedabad" },
    ]
    const selectedMovie = movies.find((movie) => movie.id === movieId);


    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email) {
            return "email is required";
        }
        else if (!emailRegex.test(email)) {
            return "enter a valid email";
        }
        else {
            return ""
        }
    }
    const validateNumber = (number) => {
        if (!number) {
            return "enter your number";
        }
        else if (!/^\d+$/.test(number)) {
            return "number must be numeric";
        }
        else if (number.length > 10) {
            return "number must be of 10 character";
        }
        else if (number.length < 10) {
            return "number must be atleast 10 character";
        }
        else {
            return "";
        }
    }
    const handleEmailChange = (e) => {
        const value = e.target.value;
        const emailError = validateEmail(value);

        setForm((prevData) => ({
            ...prevData,
            email: value,
            emailError: emailError,
        }))
    }
    const handleNumberChange = (e) => {
        const value = e.target.value;
        if ((value.length <= 10) && (/^\d*$/.test(value))) {
            const numberError = validateNumber(value);

            setForm((prevData) => ({
                ...prevData,
                number: value,
                numberError: numberError,
            }));
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const ValidateEmailError = validateEmail(Form.email);
        const ValidateNumberError = validateNumber(Form.number);

        if (ValidateEmailError || ValidateNumberError) {
            setForm((prevdata) => ({
                ...prevdata,
                emailError: ValidateEmailError,
                numberError: ValidateNumberError,
            }))
        }
        else {
            alert("Your data is submitted successfully")
        }
    };
    const handleNavigate = () => {
        navigate("/PaymnetSuccess");
    };

    return (
        <div>
            <Header />
            <div className='conatiner'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <form onSubmit={handleSubmit} className='bg-light p-3 m-3'>
                            <h5 className='bg-danger text-white p-2 mt-3'>Share your Contact Details</h5>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email"
                                    className={`form-control ${Form.emailError ? 'is-invalid' : ''}`}
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                    onChange={handleEmailChange}
                                    value={Form.email} />
                                <div className="invalid-feedback">
                                    {Form.emailError || ''}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Mobile No.</label>
                                <input type="text" className={`form-control ${Form.numberError ? 'is-invalid' : ''}`}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter your Number"
                                    onChange={handleNumberChange}
                                    value={Form.number} />
                                <div className="invalid-feedback">
                                    {Form.numberError || ''}
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-danger w-25' onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                        <div className='payment-options p-3 m-3 '>
                            <h5 className='bg-danger text-white p-2 mt-3'>Payment Options</h5>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <ul className='list-unstyled payment-btn'>
                                            {/* <li><button className='btn btn-outline-danger text-dark py-2 px-5 m-2'>
                                                Scan QR Code
                                            </button></li> */}
                                            <li><button type="button" className="btn btn-outline-danger text-dark py-2 px-5 m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                Scan QR Code
                                            </button></li>

                                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title text-center w-100" id="staticBackdropLabel">QR Code</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <h6 className='m-2 '>Scan this QR Code for Payment:</h6>
                                                            <div className='d-flex justify-content-center m-3 p-4'>
                                                                <img src='/qr.png' />
                                                            </div>
                                                            <div className='steps p-3 fs-6'>
                                                                <h6 className='text-danger'> Scan QR code on your Paytm App</h6>
                                                                <p className='mt-3'>STEPS TO SCAN QR CODE</p>
                                                                <p>1.Open Paytm App</p>
                                                                <p>2.Tap Scan option available at the bottom</p>
                                                                <p>3.Point Paytm Scan at QR Code to login</p>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-danger" onClick={handleNavigate}>
                                                                Payment
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <li><button className='btn btn-outline-danger text-dark py-2 px-5 m-2'>Pay by any UPI App</button></li>
                                            <li><button className='btn btn-outline-danger text-dark py-2 px-5 m-2'>Debit/Credit Card</button></li>
                                            <li><button className='btn btn-outline-danger text-dark py-2 px-5 m-2'>Net Banking</button></li> */}
                                        </ul>
                                    </div>
                                    <div className='col-md-8 '>
                                        <h3 className='text-center'>Order Summary</h3>
                                        <div className='order'>
                                            <div className='d-flex justify-content-between '>
                                                <div className=''>
                                                    <div className="moviename">
                                                        <h4 className='mb-1'>{selectedMovie ? selectedMovie.name : "movie not found"} </h4>
                                                        <p className='mb-1'>Gujarati 2D</p>
                                                    </div>
                                                    <p className='mb-1'>{selectedMovie ? selectedMovie.theater : "theater not found"}</p>
                                                </div>
                                                <div className=' d-flex'>
                                                    <h2>{seatLimit}</h2>
                                                    <h4 className='mt-1 m-2'>Ticket</h4>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-between '>
                                                <h5>Seat : {selectedSeatsArray.length > 0 ? selectedSeatsArray.join(",") : "No seats selected"}</h5>
                                                <button className='btn btn-outline-danger'>Total Amount : {totalAmount}</button>
                                            </div>
                                            <h6 >M-Ticket</h6>
                                        </div>
                                        {/* <div>
                                            <div className='d-flex upi'>
                                                <img src='/upi.png' />
                                                <h6 className='m-1'>Pay by any UPI App</h6>
                                            </div> */}
                                        {/* <div className='upimethod d-flex justify-content-around'> */}
                                        {/* <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input mt-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label mt-3 d-flex" for="flexRadioDefault1">
                                                            <img src='/g-pay.png' />
                                                            <p className='mt-3  m-3 text-secondary'>Goole Pay</p>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input mt-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label mt-3 d-flex" for="flexRadioDefault1">
                                                            <img src='/paytm.png' />
                                                            <p className='mt-3 m-3 text-secondary'>Paytm</p>
                                                        </label>
                                                    </div> <div className="form-check">
                                                        <input className="form-check-input mt-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label mt-3 d-flex" for="flexRadioDefault1">
                                                            <img src='/amazon.png' />
                                                            <p className='mt-3 m-3 text-secondary'>Amazon</p>
                                                        </label>
                                                    </div>
                                                </div> */}
                                        {/* <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input mt-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label mt-3 d-flex" for="flexRadioDefault1">
                                                            <img src='/phonepe.jpeg' />
                                                            <p className='mt-3 m-3 text-secondary'>Phone Pe</p>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input mt-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label mt-3 d-flex" for="flexRadioDefault1">
                                                            <img src='/upilogo.png' />
                                                            <p className='mt-3 m-3 text-secondary'>UPI</p>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input mt-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label mt-3 d-flex" for="flexRadioDefault1">
                                                            <img src='/g-pay.png' />
                                                            <p className='mt-4 m-3 text-secondary'>Goole Pay</p>
                                                        </label>
                                                    </div>
                                                </div> */}
                                        {/* </div> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>

            </div>
        </div >
    )
}

export default Payment