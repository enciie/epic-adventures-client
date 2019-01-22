import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchUser } from '../actions/userActions'
import { fetchTrips, fetchCurrentTrip, deleteTrip } from '../actions/tripActions'
import { deleteComment } from '../actions/commentActions'

import Buttons from '../components/Buttons'
import TripShowPage from '../components/TripShowPage'
import CommentForm from './CommentForm'

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

          <div className="TripShowContainer">
            <p className="Username">Logged in as: {this.props.user.username}</p>

            <div className="TripShow">
              <Buttons
                user={user}
                trip={trip}
                tripId={trip.id}
                match={match}
                deleteTrip={this.removeTrip}
              />
              <TripShowPage
                key={trip.id}
                trip={trip}
                user={user}
                comments={trip.comments}
                deleteComment={this.props.deleteComment}
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
      user: state.user.current
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser,
  fetchCurrentTrip,
  fetchTrips,
  deleteTrip,
  deleteComment
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TripShow));
