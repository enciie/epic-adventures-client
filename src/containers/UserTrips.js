import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'
import { fetchTrips } from '../actions/tripActions'

import TripCard from '../components/TripCard'

import '../stylesheets/Trip.css'

class UserTrips extends Component {

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchTrips();
  }

  render() {
    const { user, trips, match } = this.props
    const userTrips = trips.filter(trip => trip.user.id === user.id)
    console.log("UserTrips", userTrips)
    return (
      <div>

        <div className="TripListContainter">
          <p className="Username">Logged in as: {user.username}</p>
          <h1 className="Header">MY EPIC ADVENTURES</h1>

          { userTrips.map(trip =>
            <TripCard
              key={trip.id}
              match={match}
              trip={trip}
            />
          )}

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("UserTripState", state)
  return {
    user: state.user.current,
    trips: state.trips.all
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTrips,
  fetchUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserTrips)
