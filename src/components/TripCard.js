import React from 'react'
import { Link } from 'react-router-dom'

import '../stylesheets/Trip.css'

const Trip = ({ trip: { id, name, img_url, user: {username} } }) =>
    <div className="TripCard">
        <img className="TripImage" src={img_url} alt={name} />
        <Link to={`/trips/${id}`}>{name}</Link>
        <p>{username}</p>
    </div>

export default Trip;
