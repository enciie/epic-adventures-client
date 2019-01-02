import React from 'react'

const Comment = ({ comment: { id, content, user_id }, tripId, deleteComment }) =>
  <li className="Comment">
    { content }<br/>
    <button onClick={ () => deleteComment(id, tripId) }>X</button>
  </li>


export default Comment;
