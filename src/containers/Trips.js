import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'
import { fetchTrips, deleteTrip } from '../actions/tripActions'
import { deleteComment } from '../actions/commentActions'


import TripCard from '../components/TripCard'
import TripForm from '../components/TripForm'

import '../stylesheets/Trip.css'

class Trips extends Component {
    componentWillMount() {
        this.props.fetchUser()
        this.props.fetchTrips()
    }

    render() {
        const { user, trips } = this.props

        return (
            <div>
                <div> Logged as: {user.username} </div>
                <h1>EPIC ADVENTURES</h1>
                <TripForm />
                {trips.map(trip => <TripCard key={trip.id} trip={trip} deleteTrip={this.props.deleteTrip} deleteComment={this.props.deleteComment} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.current,
        trips: state.trips.all
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser,
    fetchTrips,
    deleteTrip,
    deleteComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Trips)
