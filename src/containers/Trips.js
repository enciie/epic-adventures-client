import React from 'react'; 

const Trips = (props) => (
    <div>
        <h2> Trips </h2>
        {props.trips.map(trip => <h4>{trip.name}</h4>)}
    </div>
);

export default Trips;