import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCurrentTrip, deleteTrip } from '../actions/tripActions'
import { deleteComment } from '../actions/commentActions'

import TripShowPage from '../components/TripShowPage'
import NavBar from '../components/NavBar';
import { bindActionCreators } from 'redux';

class TripShow extends Component {

    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.fetchCurrentTrip(id);
    }

    render() {
        console.log("trips", this.props)

        return (
            <div>
                <NavBar />
                <div>
                    <h1>WHAT AN ADVENTURE...</h1>
                    <TripShowPage key={ this.props.trip.id } trip={this.props.trip} deleteTrip={this.props.deleteTrip} deleteComment={this.props.deleteComment} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        trip: state.trips.trip
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCurrentTrip,
    deleteTrip,
    deleteComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TripShow);