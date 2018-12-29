import React from 'react'

import '../stylesheets/Trip.css'

const Trip = ({ trip: { id, name, location, img_url, user: {username} } }) =>
    <div className="TripCard">
        <img className="TripImage" src={img_url} alt={name} />
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{username}</p>
    </div>

export default Trip
