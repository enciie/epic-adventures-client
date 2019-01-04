import React from 'react'
import { Link } from 'react-router-dom'

const EditButton = ({trip, tripId, match } ) =>
    <button className={`edit_trip_${tripId}_btn`}>
        <Link 
            style={{textDecoration: 'none', color: 'black'}} 
            to={{
                pathname: `${match.url}/edit`,
                state: { trip }
            }}
        >
            Edit
         </Link> 
    </button>

export default EditButton;
