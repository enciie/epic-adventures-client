import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'
import { fetchTrips, deleteTrip } from '../actions/tripActions'
import { deleteComment } from '../actions/commentActions'

import TripCard from '../components/TripCard'
import NavBar from '../components/NavBar'

import '../stylesheets/Trip.css'

class Trips extends Component {
    componentWillMount() {
        debugger;
        this.props.fetchUser()
        this.props.fetchTrips()
        debugger;
    }

    render() {
        console.log(this.props)
        const { user, trips } = this.props

        return (
            <div>
                <NavBar />
                <div> Logged as: {user.username} </div>
            
                <h1>EPIC ADVENTURES</h1>
                {trips.map(trip => <TripCard key={trip.id} trip={trip} deleteTrip={this.props.deleteTrip} deleteComment={this.props.deleteComment} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("state", state)
    return {
        user: state.user.current,
        trips: state.trips.trips
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser,
    fetchTrips,
    deleteTrip,
    deleteComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Trips)
