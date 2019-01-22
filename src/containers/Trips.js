import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchUser } from '../actions/userActions'
import { fetchTrips } from '../actions/tripActions'

import TripCard from '../components/TripCard'

import '../stylesheets/Trip.css'

class Trips extends Component {

  componentDidMount() {
    this.props.fetchUser()
    this.props.fetchTrips()
  }

  render() {
    console.log("User", this.props.user)
    console.log("all trips", this.props.trips)
    // [{}, {}]
    const { user, trips } = this.props

    return (
      <div>

        <div className="TripListContainter">
          <p className="Username">Logged in as: {user.username}</p>
          <h1 className="Header">ADVENTURE AWAITS</h1>
          {trips.map(trip =>
              <TripCard
                  key={trip.id}
                  trip={trip}
              />
          )}
        </div>
      </div>
    )
  }
}
//recieve state fron the store whenever there is a change and make that data available to the component as props
const mapStateToProps = state => {
    console.log("state", state)
    return {
        user: state.user.current,
        trips: state.trips.all
    }
}

//let's us invoke our actions directly
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser,
    fetchTrips
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Trips))
