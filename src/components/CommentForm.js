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

        const { tripId } = this.props
        this.props.createComment(this.state, tripId)
        this.setState({ content: "" })
    }

    render() {
        const { content } = this.state

        return (
            <form onSubmit={this.onSubmit}>
                <input name="content" placeholder="Content" value={content} onChange={this.onChange} />
                <button type="submit">Add</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    createComment
}, dispatch)

export default connect(null, mapDispatchToProps)(CommentForm)
