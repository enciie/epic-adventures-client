import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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

    handleChange = (e) => {
        const field = e.target.name
        let state = this.state

        state[field] = e.target.value
        this.setState(state)
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.createTrip(this.state)
        this.setState({
            name: "",
            description: "",
            location: "",
            img_url: "",
        })
    }

    render() {
        const { name, description, location, img_url } = this.state

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

export default connect(null, mapDispatchToProps)(TripForm)
