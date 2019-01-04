import React from 'react'
// import { Link } from 'react-router-dom'

import EditButton from './EditButton'
import Comment from './Comment'
import CommentForm from './CommentForm'


import '../stylesheets/TripShowPage.css'

const TripShowPage = ({ trip, user = {}, comments = [],  deleteComment, deleteTrip, editTrip, match }) => (
    <div className="TripShowPage">
        <img className="TripShowImage" src={ trip.img_url } alt={ trip.name } />
        <p>Adventure by: {user.username}</p>
        <h3>{ trip.name }</h3>
        <p>LOCATION: { trip.location }</p>
        <p>DESCRIPTION: { trip.description }</p>
        <button onClick={() => deleteTrip(trip.id)}>Delete Adventure</button>
        <EditButton tripId={trip.id} trip={trip} user={user} editTrip={editTrip} match={match} />
        {/* <button className={`edit_trip_${id}_btn`}>
            <Link 
                style={{textDecoration: 'none', color: 'black'}} 
                to={{
                    pathname:`${match.url}/edit`,
                    state: { trip: {id, name, location, description, img_url } }
                }}
            >
                Edit
            </Link> 
        </button> */}
        <ul className="CommentList">
            {comments.map(comment => <Comment key={comment.id} comment={comment} user={user} tripId={trip.id} deleteComment={deleteComment} />)}
        </ul>
        <CommentForm tripId= { trip.id } />

    </div>
);

export default TripShowPage;
