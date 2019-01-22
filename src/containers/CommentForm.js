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

    this.props.history.push(`/trips/${tripId}`)
  }

  render() {
      const { content } = this.state
        return (
          <div className="media mt-3 shadow-textarea">
            <div className="media-body">
              <div className="form-group basic-textarea rounded-corners">
                <form onSubmit={this.handleSubmit}>
                  <textarea
                      name="content"
                      placeholder="Your comment here..."
                      value={content}
                      onChange={this.handleChange}
                      className="form-control z-depth-1"
                      id="exampleFormControlTextarea3"
                      rows="3"
                  /><br/>
                  <button className="btn btn-default" type="submit">
                    Leave A Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    createComment
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(CommentForm))
