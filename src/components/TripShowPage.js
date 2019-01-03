import React from 'react'
import { Link } from 'react-router-dom'

import Comment from './Comment'
import CommentForm from './CommentForm'


import '../stylesheets/TripShowPage.css'

const TripShowPage = ({ trip: { id, name, location, description, img_url}, user = {}, comments = [],  deleteComment, deleteTrip, match }) => (
    <div className="TripShowPage">
        <img className="TripShowImage" src={ img_url } alt={ name } />
        <p>Adventure by: {user.username}</p>
        <h3>{ name }</h3>
        <p>LOCATION: { location }</p>
        <p>DESCRIPTION: { description }</p>
        <button onClick={() => deleteTrip(id)}>Delete Adventure</button>
        <button className={`edit_trip_${id}_btn`}>
            <Link 
                style={{textDecoration: 'none', color: 'black'}} 
                to={{
                    pathname:`${match.url}/edit`,
                    state: { trip: {id, name, location, description, img_url } }
                }}
            >
                Edit
            </Link> 
        </button>
        <ul className="CommentList">
            {comments.map(comment => <Comment key={comment.id} comment={comment} tripId={id} deleteComment={deleteComment} />)}
        </ul>
        <CommentForm tripId= { id } />

    </div>
);

export default TripShowPage;
