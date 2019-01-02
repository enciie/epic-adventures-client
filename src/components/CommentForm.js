import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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

    handleChange = (e) => {
        const field = e.target.name
        let state = this.state

        state[field] = e.target.value
        this.setState(state)
    }

    handleSubmit = (e) =>  {
        e.preventDefault()

        const { tripId } = this.props
        this.props.createComment(this.state, tripId)
        this.setState({ content: "" })
    }

    render() {
        const { content } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <input name="content" placeholder="Content" value={content} onChange={this.handleChange} />
                <button type="submit">Leave A Comment</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    createComment
}, dispatch)

export default connect(null, mapDispatchToProps)(CommentForm)
