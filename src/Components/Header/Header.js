import React, { useContext } from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light menu ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h3 className="mb-5 text-primary "><strong>Comfort Ride</strong></h3>
                </a>

                <button className="navbar-toggler position-absolute top-0 start-100 translate-middle mt-5" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav font-weight-bold">
                        <Link className="nav-link active p-4 text-primary " aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link p-4 text-primary  " to="/login">Destination</Link>
                        <Link className="nav-link p-4 text-primary  " to="*">Blog</Link>
                        <Link className="nav-link p-4 text-primary " to="*">Contact</Link>
                        <Link  to="/login">
                        <button style={{height:"35px"}} className="btn btn-warning nav-link p-2 m-4 text-white">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;