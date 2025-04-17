import React, { useState } from 'react'
import Header from './Header';

function Register() {
    const [formData, setFormdata] = useState({
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        number: '',
        numberError: '',
    });
    const definedEmail = 'ispanchal165@gmail.com';
    const definedPassword = '12345678';

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email) {
            return 'Email is required';
        }
        else if (!emailRegex.test(email)) {
            return 'Enter valid EmailId';
        }
        else {
            return '';
        }
    }
    const validatePassword = (password) => {
        if (!password) {
            return 'password id required';
        }
        else if (password.length > 8) {
            return 'password must be of 8 character only';
        }
        else if (password.length < 8) {
            return 'password must be atleast 8 character';
        }
        else {
            return '';
        }
    }
    const validateNumber = (number) => {
        if (!number) {
            return 'Number is required';
        }
        else if (number > 10) {
            return 'number must be of 10 character';
        }
        else if (number < 10) {
            return 'number must be atleast of 10 character';
        }
        else if (!/^\d+$/.test(number)) {
            return 'number must be numeric!';
        }
        else {
            return '';
        }
    }
    const handleEmailChange = (e) => {
        const value = e.target.value;
        const emailError = validateEmail(value);

        setFormdata((prevdata) => ({
            ...prevdata,
            email: value,
            emailError: emailError,
        }))
    }

    const handleNumber = (e) => {
        const value = e.target.value;
        if ((value.length <= 10) && (/^\d*$/.test(value))) {
            const numberError = validateNumber(value);

            setFormdata((prevData) => ({
                ...prevData,
                number: value,
                numberError: numberError,
            }));
        }
    }
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        const passwordError = validatePassword(value);

        setFormdata((prevdata) => ({
            ...prevdata,
            password: value,
            passwordError: passwordError,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const ValidateEmailError = validateEmail(formData.email);
        const validatePasswordError = validatePassword(formData.password);
        const validateNumberError = validateNumber(formData.number);

        if (ValidateEmailError || validatePasswordError || validateNumberError) {
            setFormdata((prevdata) => ({
                ...prevdata,
                emailError: ValidateEmailError,
                passwordError: validatePasswordError,
                numberError: validateNumberError,
            }))
        }
        else if (formData.email === definedEmail && formData.password === definedPassword) {
            alert("login successfully")
        }
        else {
            alert("invalid Email or Password")
        }

    };
    const resetForm = () => {
        setFormdata({
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
        });
    };

    const handleCloseLogin = () => {
        resetForm();
    }

    return (
        <div>
            <Header />
            <div className='img'>
                {/* <Header/> */}
                <div className="register">
                    <div className="Form3 ">

                        <form onSubmit={handleSubmit}>
                            <h1 className="text-center">Register</h1>
                            <div className="mb-1">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email"
                                    className={`form-control ${formData.emailError ? 'is-invalid' : ''}`}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="abcd@gmail.com"
                                    onChange={handleEmailChange}
                                    value={formData.email} />
                                <div className="invalid-feedback">
                                    {formData.emailError || ''}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className={`form-control ${formData.passwordError ? 'is-invalid' : ''}`}
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    onChange={handlePasswordChange}
                                    value={formData.password} />
                                <div className="invalid-feedback">
                                    {formData.passwordError || ''}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name " />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Mobile No.</label>
                                <input type="text" className={`form-control ${formData.numberError ? 'is-invalid' : ''}`}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter your Number"
                                    onChange={handleNumber}
                                    value={formData.number} />
                                <div className="invalid-feedback">
                                    {formData.numberError || ''}
                                </div>
                            </div>
                            {/* <div className="mb-3">
                            <label htmlFor="exampleInputGender" >
                                Select Gender
                            </label>
                            <div className="gender">
                                <input className="m-2" type='radio' id='Male' value="Male" />
                                <label htmlFor='Male'> Male</label>
                                <input className="m-2" type='radio' id='female' value="Female" />
                                <label htmlFor='Female'>Female</label>
                                <input className="m-2" type='radio' id='others' value="Others" />
                                <label htmlFor='Other'>Others</label>
                            </div>
                        </div> */}
                            <button type="submit" className="btn btn-primary buttons" onClick={handleSubmit}>Submit</button>
                            <button type="button" className="btn btn-primary buttons" onClick={handleCloseLogin}>Close</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Register;