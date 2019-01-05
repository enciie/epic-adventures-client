import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchUser } from '../actions/userActions'
import { fetchCurrentTrip, deleteTrip, editTrip } from '../actions/tripActions'
import { deleteComment } from '../actions/commentActions'

import TripShowPage from '../components/TripShowPage'
import CommentForm from '../components/CommentForm'
import NavBar from '../components/NavBar'

class TripShow extends Component {
    constructor() {
        super()

        this.removeTrip = this.removeTrip.bind(this)
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.fetchCurrentTrip(id);
        this.props.fetchUser();
    }

    removeTrip(id) {
        const { deleteTrip, history } = this.props
        deleteTrip(id)
        debugger;
        history.push('/trips/mytrips')  
    }

    render() {
        const { match, trip, user } = this.props
        return (
            <div>
                <NavBar />
                <div className="TripShowContainer">
                    <p className="Username">Logged in as: {this.props.user.username}</p> 
                    <h1>WHAT AN ADVENTURE...</h1>
                    <TripShowPage 
                        key={ trip.id }
                        match={match} 
                        trip={trip}
                        user={user} 
                        comments={trip.comments}
                        editTrip={this.props.editTrip}
                        deleteTrip={this.removeTrip} 
                        deleteComment={this.props.deleteComment} 
                    />
                    {/* {this.renderButtons()} */}
                    <CommentForm tripId={trip.id} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("STATEcurrent", state.trips.current)
    console.log("state", state)
    return {
        trip: state.trips.current,
        trips: state.trips.all,
        user: state.user.current
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser,
    fetchCurrentTrip,
    deleteTrip,
    editTrip,
    deleteComment
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TripShow));