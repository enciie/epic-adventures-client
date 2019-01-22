import React from 'react'
import { Link } from 'react-router-dom'

import '../stylesheets/TripShowPage.css'
import { MDBIcon } from 'mdbreact';

const Buttons = ({ user, trip, tripId, match, deleteTrip }) =>
  (user.id === trip.user_id) ? (
    <>
      <div className="text-center">
        <button className="btn btn-default btn-md custom">
            <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to={{
                    pathname: `${match.url}/edit`,
                    state: { trip }
                }}
            >
                <MDBIcon icon="pencil" />
            </Link>
        </button>
        <button onClick={() => deleteTrip(trip.id)} className="btn btn-default btn-md custom" >
            <MDBIcon icon="trash-o" />
        </button>
      </div>
    </>
  ) : ("")

export default Buttons;
