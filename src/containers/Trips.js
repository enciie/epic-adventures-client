import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchUser } from '../actions/userActions'
import { fetchTrips } from '../actions/tripActions'

import TripCard from '../components/TripCard'
import NavBar from '../components/NavBar'

import '../stylesheets/Trip.css'

class Trips extends Component {

    componentWillMount() {
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
                <NavBar />
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

const mapStateToProps = state => {
    console.log("state", state)
    return {
        user: state.user.current,
        trips: state.trips.all
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser,
    fetchTrips
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Trips))
