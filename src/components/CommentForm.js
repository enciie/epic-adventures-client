import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { createComment } from '../actions/commentActions'

class CommentForm extends Component {
    constructor() {
        super()

        this.state = {
            content: ""
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

    handleSubmit = (event) =>  {
        event.preventDefault()
        const { tripId } = this.props
        this.props.createComment(this.state, tripId)
        this.setState({ content: "" })
        debugger;
        // this.props.history.push({
        //     pathname: `/trips/${tripId}`
        // })
        this.props.history.push(`/trips/${tripId}`)
    }

    render() {
        const { content } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <textarea 
                    name="content" 
                    placeholder="Content" 
                    value={content} 
                    onChange={this.handleChange}
                /><br />
                <button type="submit">Leave A Comment</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    createComment
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(CommentForm))
