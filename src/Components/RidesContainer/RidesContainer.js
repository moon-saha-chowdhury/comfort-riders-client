import React from 'react';
import { useHistory } from 'react-router';

const RidesContainer = (props) => {
    const { rideName, image, id} = props.ride;
    const history = useHistory();
    
    const handleDestination =(ridesId)=>{
        const url =`/rides/${ridesId}`;
        history.push(url);
    }
    return (
        <div onClick={() => handleDestination(id)} className="mt-5">
            <div className="card h-100 shadow rounded p-3 bg-light">
                <img className="bg-light mt-3 w-50 card-img-top card-image ml-auto mr-auto" src={image} alt="league" />
                <div className="card-body ml-auto mr-auto">
                    <h4 className="card-title text-highlight">{rideName}</h4>
                </div>
            </div>
        </div>
    );
};

export default RidesContainer;