import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ridesData from '../../fakeData/data.json';
import Map from '../../images/Map.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import { PickUptContext } from '../Destination/Destination';

const DestinationDetails = () => {
    const { ridesDetail } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        setDetails(ridesData[ridesDetail]);
    }, [])

    const[loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const [pickUp, setPickUp] = useContext(PickUptContext);


    return (
        <div>
             {/* NavBar Start */}

             <nav className="navbar navbar-expand-lg navbar-light menu ">
            <div className="container-fluid bg-light">
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
                        <Link className="nav-link p-4 text-primary"  to="">{loggedInUser.email} </Link>
                    </div>
                </div>
            </div>
        </nav>

        {/* Navbar End */}
            <div className="row d-flex align-items-center ml-5 mr-5 ">
            <div className="col-md-4 mb-3 bg-light rounded mt-3 p-5">
                <div className="bg-warning rounded p-3 mt-2 text-white font-weight-bold ">
                <p>Mirpur</p>
                <p>Dhanmondi</p>

                </div>
                
                <br/>
                <br/>
            <div className="card mb-3">
                <div className="card-body d-flex">
                <img className="w-25 h-50" src={details.image}alt="..."/>
                <h5 className="card-text pl-3">{details.rideName}</h5>
                <h5 className="card-text pl-3"><FontAwesomeIcon icon={faUserFriends}/> 4</h5>
                <h5 className="card-text pl-3"> $67</h5>
                </div>
                </div>
                <div className="card mb-3">
                <div className="card-body d-flex">
                <img className="w-25 h-50" src={details.image}alt="..."/>
                <h5 className="card-text pl-3">{details.rideName}</h5>
                <h5 className="card-text pl-3"><FontAwesomeIcon icon={faUserFriends}/> 4</h5>
                <h5 className="card-text pl-3"> $67</h5>
                </div>
                </div>
                <div className="card mb-3">
                <div className="card-body d-flex">
                <img className="w-25 h-50" src={details.image}alt="..."/>
                <h5 className="card-text pl-3">{details.rideName}</h5>
                <h5 className="card-text pl-3 "><FontAwesomeIcon icon={faUserFriends}/> 4</h5>
                <h5 className="card-text pl-3"> $67</h5>
                </div>
                </div>
                </div>

                <div className="col-md-7 ml-auto mr-auto">
                    <img className="w-75" src={Map} alt="" />
                </div>        
                </div>
            </div>
    );
};

export default DestinationDetails;