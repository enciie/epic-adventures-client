import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createTrip } from '../actions/tripActions'

class TripForm extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            description: "",
            location: "",
            img_url: "",
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        const field = e.target.name
        let state = this.state

        state[field] = e.target.value
        this.setState(state)
    }
    
    onSubmit(e) {
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
            <form onSubmit={this.onSubmit}>
                <input name="name" placeholder="Name" value={name} onChange={this.onChange} />
                <input name="description" placeholder="Description" value={description} onChange={this.onChange} />
                <input name="location" placeholder="Location" value={location} onChange={this.onChange} />
                <input name="img_url" placeholder="img_url" value={img_url} onChange={this.onChange} />
                <button type="submit">Add</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    createTrip
}, dispatch)

export default connect(null, mapDispatchToProps)(TripForm)
