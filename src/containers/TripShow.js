import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { fetchCurrentTrip, deleteTrip } from '../actions/tripActions'
import { deleteComment } from '../actions/commentActions'

import TripShowPage from '../components/TripShowPage'
import NavBar from '../components/NavBar';

class TripShow extends Component {

    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.fetchCurrentTrip(id);
        debugger;
    }

    render() {
        console.log("trips", this.props)
        console.log("trip", this.props.trip)
        console.log("comments", this.props.trip.comments)

        return (
            <div>
                <NavBar />
                <div>
                    <h1>WHAT AN ADVENTURE...</h1>
                    <TripShowPage key={ this.props.trip.id } trip={this.props.trip} comments={this.props.comments} deleteTrip={this.props.deleteTrip} deleteComment={this.props.deleteComment} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("STATE", state.trips.trip)
    console.log("STATE2", state.trips.trip.comments)
    return {
        trip: state.trips.trip,
        comments: state.trips.trip.comments
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCurrentTrip,
    deleteTrip,
    deleteComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TripShow);