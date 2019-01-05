import React from 'react'

const Comment = ({ comment: { id, content, username }, tripId, deleteComment }) =>
  <li className="Comment">
    { content }
    <b> - {username} </b>
    <button onClick={ () => deleteComment(id, tripId) }>X</button>
  </li>


export default Comment;
