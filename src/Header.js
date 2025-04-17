import React from 'react'
// import logo from '../../project/public/loginbg2.jpeg'
// import logo from '. ./public/loginbg2.jpeg'
import logo from '../src/logob.jpg'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nb">
            <div className="container-fluid">
                <a className="navbar-brand d-flex " href="#">
                    <img src={logo} alt="" width="50" height="50" />
                    <h5 className='mt-3 text-danger'>CinemaSwift</h5>
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cities
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Ahmedabad</a></li>
                                <li><a className="dropdown-item" href="/">Delhi</a></li>
                                <li><a className="dropdown-item" href="/">Mumbai</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-danger w-150 py-8" ><a href="/login">Login in</a></button>
                            <button type="button" className="btn btn-danger w-150 py-8 mx-2" ><a href="/register">Register</a></button>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search movies here" aria-label="Search" />
                        <button className="btn btn-danger" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header