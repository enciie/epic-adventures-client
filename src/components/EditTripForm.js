import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { editTrip } from '../actions/tripActions'
import NavBar from './NavBar';

import '../stylesheets/TripForm.css'

class EditTripForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            description: "",
            location: "",
            img_url: "",
            editing: false
        }

        this.onChange = this.handleChange.bind(this)
        this.onSubmit = this.handleSubmit.bind(this)
    }

    //this is when we are going to modify the state
    componentWillMount() {
        this.setState({
           ...this.props.location.state.trip
       })
    }

    handleChange = (event) => {
        // const value = event.target.value
        // const name = event.target.name
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { trip } = this.props.location.state
        debugger;
        this.props.editTrip(this.state)
        this.setState({
            name: "",
            description: "",
            location: "",
            img_url: "",
        })
        this.props.history.push({
            pathname: `/trips/${trip.id}`,
            state: { trip }
        })
    }

    render() {
        console.log("editFormState", this.state)
        console.log("editFormProps", this.props)
        const { name, description, location, img_url } = this.state

        return (
            <div>
                <NavBar />
                <div className="TripFormContainer">
                    <h2 className="header">Edit Adventure</h2>
                    <form className="TripForm" onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="name">Title</label><br />
                            <input
                                name="name"
                                placeholder="Title"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label><br />
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={description}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="location">Location</label><br />
                            <input
                                name="location"
                                placeholder="Location"
                                value={location}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="img_url">Upload Image:</label><br />
                            <input
                                name="img_url"
                                placeholder="img_url"
                                value={img_url}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ editTrip }, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(EditTripForm))
