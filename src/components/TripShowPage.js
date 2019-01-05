import React from 'react'
// import { Link } from 'react-router-dom'

import EditButton from './EditButton'
import Comment from './Comment'

import '../stylesheets/TripShowPage.css'

const TripShowPage = ({ trip, user = {}, comments = [],  deleteComment, deleteTrip, editTrip, match }) => (
    <div className="TripShowPage">
        <img className="TripShowImage" src={ trip.img_url } alt={ trip.name } />
        <p>Adventure by: { trip.username }</p>
        <h3>{ trip.name }</h3>
        <p>LOCATION:</p>
        <p>{trip.location}</p>
        <p>DESCRIPTION:</p>
        <p>{trip.description}</p>


        {/* //Hide Buttons if trip user is not current_user */}
        <button onClick={() => deleteTrip(trip.id)}>Delete Adventure</button>
        <EditButton tripId={trip.id} trip={trip} user={user} editTrip={editTrip} match={match} /><br />
        <br/>
        <b>COMMENTS:</b>
        <ul className="CommentList">
            {comments.map(comment => <Comment key={comment.id} comment={comment} user={user} tripId={trip.id} deleteComment={deleteComment} />)}
        </ul>
    </div>
);

export default TripShowPage;
