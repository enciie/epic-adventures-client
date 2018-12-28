import React from 'react';
import './Trips.css';

const Trips = (props) => (
    <div className="TripsContainer">
        <h2> Trips </h2>
        {props.trips.map(trip => 
            <div className="TripCard" >
                <img className="TripImage" src={trip.img_url} alt={trip.name} />
                <h4>{trip.name}</h4>
                <p> Location: {trip.location} </p>
            </div>
        )}
    </div>
);

export default Trips;