import React from 'react'

import Comment from './Comment'

import '../stylesheets/Comment.css'
import '../stylesheets/TripShowPage.css'

const TripShowPage = ({ trip, user = {}, comments = [],  deleteComment }) => (
  <div >
    <div className="TripShowInfo" tripid={trip.id} tripuserid={trip.user_id}>
      <img className="TripShowImage" src={ trip.img_url } alt={ trip.name } />
      <div className="sub-text">Adventure by: { trip.username }</div><br />
      <h1>{ trip.name }</h1>
      <h4>{trip.location}</h4><br />
      <p>{trip.description}</p>
      <br/>
    </div>
    <div className="detailBox">
      <div className="titleBox">
        <label>Comments</label>
      </div>
      <div className="actionBox">
        <ul className="commentList">
          {comments.map(comment =>
            <Comment
              key={comment.id}
              comment={comment}
              user={user}
              tripId={trip.id}
              deleteComment={deleteComment}
            />
          )}
        </ul>
      </div>
    </div>
  </div>
);

export default TripShowPage;
