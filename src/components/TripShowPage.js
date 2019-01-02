import React from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'


import '../stylesheets/TripShowPage.css'

const TripShowPage = ({ trip: { id, name, location, description, img_url, comments }, deleteComment }) => (
    <div className="TripShowPage">
        <img className="TripShowImage" src={img_url} alt={name} />
        <h3>{name}</h3>
        <p>LOCATION: {location}</p>
        <p>DESCRIPTION: {description}</p>
        <CommentForm tripId= { id } />
    </div>
);

export default TripShowPage;
