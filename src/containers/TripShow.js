import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { fetchUser } from '../actions/userActions'
import { fetchTrips, fetchCurrentTrip, deleteTrip, editTrip } from '../actions/tripActions'
import { deleteComment } from '../actions/commentActions'

import TripShowPage from '../components/TripShowPage'
import CommentForm from '../components/CommentForm'
import NavBar from '../components/NavBar'
import { MDBIcon } from 'mdbreact';

class TripShow extends Component {
    constructor() {
        super()

        this.removeTrip = this.removeTrip.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchCurrentTrip(id);
        this.props.fetchUser();
        this.props.fetchTrips();
        console.log('mounted trip', this.props);
    }

    removeTrip(id) {
   
        const { deleteTrip, history } = this.props;
  
        deleteTrip(id);

        history.push('/trips/mytrips');
 
    }

    render() {
        const { match, trip, user } = this.props
        console.log("TRIP SHOW PROPS", this.props)
            return (
                <div>
                    <NavBar />
                    <div className="TripShowContainer">
                        <p className="Username">Logged in as: {this.props.user.username}</p>

                        <div className="TripShow">
                            <div className="text-center">
                            {(user.id === trip.user_id) ? (
                                <>
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
                                <button onClick={() => this.removeTrip(trip.id)} className="btn btn-default btn-md custom" >
                                        <MDBIcon icon="trash-o" />
                                </button>
                                </>
                            ) : (
                                ""
                                )}
                            </div>
                            <TripShowPage
                                key={trip.id}
                                match={match}
                                trip={trip}
                                user={user}
                                comments={trip.comments}
                                deleteComment={this.props.deleteComment}
                                tripOwner={this.tripOwner}
                            />
                            <CommentForm tripId={trip.id} />
                        </div>
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
    fetchTrips,
    deleteTrip,
    editTrip,
    deleteComment
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TripShow));