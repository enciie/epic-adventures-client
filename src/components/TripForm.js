import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { createTrip } from '../actions/tripActions'
import NavBar from './NavBar';

import '../stylesheets/TripForm.css'

class TripForm extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            description: "",
            location: "",
            img_url: "",
        }

        this.onChange = this.handleChange.bind(this)
        this.onSubmit = this.handleSubmit.bind(this)
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

        this.props.createTrip(this.state)
        debugger;
        this.setState({
            name: "",
            description: "",
            location: "",
            img_url: ""   
        })
        debugger;
        this.props.history.push('/trips/mytrips')
    }

    render() {
        const { name, description, location, img_url } = this.state
        console.log("stateAddForm", this.state)
        console.log("propsAddForm", this.props)
        return (
            <div>
                <NavBar />
                <div className="TripFormContainer">
                    <h2 className="header">Add New Adventure</h2>
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
                                rows="5"
                                cols="28"
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
                        <button type="submit">Add</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ createTrip }, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(TripForm))
