import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ridesData from '../../fakeData/data.json';
import Header from '../Header/Header';
import RidesContainer from '../RidesContainer/RidesContainer'
import './Home.css';

const Home = () => {
    const [rides, setRides] =useState([]);
    
    useEffect(()=>{
        setRides(ridesData);
    },[])
    return (
        <div className="ride-home">
            <Header></Header>
            <div className="row row-cols-1 row-cols-md-4 g-4 card-container ml-auto mr-auto">
                {
                    rides.map(ride => <div className="col mt-5 justify-content-center">
                     <RidesContainer ride={ride}></RidesContainer>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Home;