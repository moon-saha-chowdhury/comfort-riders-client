import React, { useContext} from 'react';
import { useHistory, useParams } from 'react-router';
import Map from '../../images/Map.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Destination = () => {
    const {ridesId} = useParams();
    // console.log(ridesId);
        const history = useHistory();
    const handleDestination =(ridesDetail)=>{
        const url =`/rideID/${ridesDetail}`;
        history.push(url);
    }


    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                    <form>
                    <p>Pick from</p>
                    <input className="form-control" type="text" name="pickFrom" required/>
                    <p>Pick To</p>
                    <input className="form-control" type="text" name="pickTo" required />
                    <br/>
                    <input className="form-control" type="date" name="date" required />
                    <br/>
                    

                    <br/>
                    <input type="submit" value="Search" onClick={()=> handleDestination(ridesId)} className="mb-3 form-control bg-info"/>  
                    </form>       
                </div>
                <div className="col-md-7 m-5">
                    <img className="w-75" src={Map} alt="" />
                </div>        
            </div>
        </div>
    );
};

export default Destination; 