import React from 'react'

const Comment = ({ comment: { id, content }, tripId, deleteComment }) =>
    <li>
        { content }
        <button onClick={ () => deleteComment(id, tripId) }>Delete</button>
    </li>

export default Comment
