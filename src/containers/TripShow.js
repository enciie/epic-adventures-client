import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchCurrentTrip, deleteTrip } from '../actions/tripActions'
import { deleteComment } from '../actions/commentActions'

import TripShowPage from '../components/TripShowPage'
import NavBar from '../components/NavBar'

class TripShow extends Component {

    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.fetchCurrentTrip(id);
    }

    render() {
        console.log("trips", this.props)
        console.log("trip", this.props.trip)
        console.log("User", this.props.trip.user)
        console.log("comments", this.props.trip.comments)
        const { match } = this.props
        return (
            <div>
                <NavBar />
                <div>
                    <h1>WHAT AN ADVENTURE...</h1>
                    <TripShowPage 
                        key={ this.props.trip.id }
                        match={match} 
                        trip={this.props.trip} 
                        user={this.props.trip.user} 
                        comments={this.props.comments} 
                        deleteTrip={this.props.deleteTrip} 
                        deleteComment={this.props.deleteComment} 
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("STATE", state.trips.trip)
    console.log("STATE2", state.trips.trip.comments)
    console.log("STATE_USER", state.trips.trip.user)
    return {
        trip: state.trips.trip,
        user: state.trips.trip.user,
        comments: state.trips.trip.comments
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCurrentTrip,
    deleteTrip,
    deleteComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TripShow);